import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Search from "../molecules/Search";
import Nav from "../molecules/Nav";

const Header = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <header>
            <div className="header__container">
                <Link to={"/"} className="logo">MOOD<span>FOR</span>MOVIE</Link>
                <ul>
                    <Nav/>
                    <li>
                        <Search
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                    </li>
                    <li className="user__name">
                        {/*{name}*/}
                        <FontAwesomeIcon icon={faUser}/>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;