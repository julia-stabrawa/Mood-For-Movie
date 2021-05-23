import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LogIn from "./components/pages/LogIn";
import Landing from "./components/pages/Landing";
import Header from "./components/organisms/Header";
import ToWatchList from "./components/pages/ToWatchList";
import WatchedList from "./components/pages/WatchedList";
import FavouriteList from "./components/pages/FavouriteList";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);
    const [toWatch, setToWatch] = useState([]);
    const [toWatched, setToWatched] = useState([]);
    const [toFav, setToFav] = useState([]);

    const logInFunc = (result) => {
        setLoggedIn(result);
    }
    useEffect(() => {
        if (localStorage.getItem("user")) {
            setLoggedIn(true);
        }
    }, []);

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=3bf47b8177eb6e12778cee7e90d70f5a&query=${searchValue}`
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.results) {
            setMovies(responseJson.results);
        }
    }
    useEffect(() => {
        getMovieRequest();
    }, [searchValue])

    const addToList = (movie) => {
        if (toWatch.includes(movie)) {
            alert("You have this movie already on your list :)");
        } else {
            const newList = [...toWatch, movie]
            setToWatch(newList);
        }
    }
    const addToWatched = (i) => {
        const newWatched = [...toWatched, toWatch[i]]
        setToWatched(newWatched);
    }
    const addToFav = (movie) => {
        if (toFav.includes(movie)) {
            alert("This movie already is on your favourite list");
        } else {
            const newList = [...toFav, movie]
            setToFav(newList);
        }
    }
    useEffect(() => {
        const data = localStorage.getItem('movies')
        if (data) {
            setToWatch(JSON.parse(data))
        }
    }, [])
    useEffect(() => {
        const data = localStorage.getItem('watched')
        if (data) {
            setToWatched(JSON.parse(data))
        }
    }, [])
    useEffect(() => {
        const data = localStorage.getItem('fav')
        if (data) {
            setToFav(JSON.parse(data))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(toWatch))
    }, [toWatch]);
    useEffect(() => {
        localStorage.setItem('watched', JSON.stringify(toWatched))
    }, [toWatched]);
    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(toFav))
    }, [toFav]);
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    const localWatched = JSON.parse(localStorage.getItem('watched'));

    return (
        <Router>
            <Header
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                movies={movies}
                handleAddClick={addToList}
            />
            <Switch>
                <Route path="/favourites">
                    <FavouriteList
                        movies={toFav}
                    />
                </Route>
                <Route path="/watched">
                    <WatchedList
                        movies={toWatched}
                        fav={toFav}
                        handleAddClick={addToFav}
                    />
                </Route>
                <Route path="/watch">
                    <ToWatchList
                        movies={toWatch}
                        watched={toWatched}
                        handleAddClick={addToWatched}
                    />
                </Route>
                <Route path="/">
                    {!loggedIn ?
                        <LogIn logFunc={logInFunc}/>
                        :
                        <Landing logFunc={logInFunc} movies={toWatch}/>
                    }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
