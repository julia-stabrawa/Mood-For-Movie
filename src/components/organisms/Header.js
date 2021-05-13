import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Search from "../molecules/Search";
import Nav from "../molecules/Nav";
import MovieSearch from "../molecules/MovieSearch";

const Header = ({searchValue, setSearchValue, movies, handleAddClick, addComponent}) => {

    return (
        <>
            <header>
                <div className="header__container">
                    <Link to={"/"} className="logo">MOOD<span>FOR</span>MOVIE</Link>
                    <ul>
                        <li className="menu__container"><Nav/></li>
                        <li className="search__container">
                            <Search
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                            />
                            <div className="user__name">
                                <FontAwesomeIcon icon={faUser}/>
                                {/*{name}*/}
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            <MovieSearch
                movies={movies}
                handleAddClick={handleAddClick}
                addComponent={addComponent}
            />
        </>
    );
}

export default Header;