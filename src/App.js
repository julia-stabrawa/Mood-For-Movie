import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LogIn from "./components/pages/LogIn";
import Landing from "./components/pages/Landing";
import ToWatch from "./components/pages/ToWatch";
import Watched from "./components/pages/Watched";
import Favourites from "./components/pages/Favourites";
import Header from "./components/organisms/Header";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [movies, setMovies] = useState([]);
    const [toWatch, setToWatch] = useState([]);
    const [toWatched, setToWatched] = useState([]);

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
    const addToWatched = (movie) => {
        if (toWatched.includes(movie)) {
            alert("You have this movie already on your list :)");
        } else {
            const newList = [...toWatched, movie]
            setToWatched(newList);
        }
    }

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(toWatch))
    }, [toWatch]);

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
                    <Favourites/>
                </Route>
                <Route path="/watched">
                    <Watched/>
                </Route>
                <Route path="/watch">
                    <ToWatch
                        movies={toWatch}
                        watched={toWatched}
                        handleAddClick={addToWatched}
                    />
                </Route>
                <Route path="/">
                    {!loggedIn ?
                        <LogIn logFunc={logInFunc}/>
                        :
                        <Landing logFunc={logInFunc} movies={movies}/>
                    }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
