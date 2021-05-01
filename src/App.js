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

const App = () =>  {
    const [loggedIn, setLoggedIn] = useState(false);

    const logInFunc = (result) => {
        setLoggedIn(result);
    }
    useEffect(() => {
        if (localStorage.getItem("name")) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/favourites">
                    <Favourites />
                </Route>
                <Route path="/watched">
                    <Watched />
                </Route>
                <Route path="/watch">
                    <ToWatch />
                </Route>
                <Route path="/">
                    {/*{!loggedIn ?*/}
                    {/*    <LogIn logFunc={logInFunc}/>*/}
                    {/*    :*/}
                        <Landing logFunc={logInFunc}/>
                    // }
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
