import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {

    return (
        <>
            <li><Link to={"/watch"} className="menu">TO WATCH</Link></li>
            <li><Link to={"/watched"} className="menu">WATCHED</Link></li>
            <li><Link to={"/favourites"} className="menu">FAVOURITES</Link></li>
        </>
    );
}

export default Nav;