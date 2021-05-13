import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <>
            <div><Link to={"/watch"} className="menu">TO WATCH</Link></div>
            <div><Link to={"/watched"} className="menu">WATCHED</Link></div>
            <div><Link to={"/favourites"} className="menu">FAVOURITES</Link></div>
        </>
    );
}

export default Nav;