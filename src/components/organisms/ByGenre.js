import React from 'react';
import SelectGenre from "../atoms/SelectGenre";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ByGenre = ({movies}) => {
    return (
        <section className="genre">
            <div className="genre__container">
                <div className="genre__title">
                    <FontAwesomeIcon icon={faFilm}/>
                    <h2>MOVIES BY GENRE</h2>
                </div>
                <div className="genre__list">
                    <div>
                        <ul>
                            <SelectGenre movies={movies} number={28}/>
                            <SelectGenre movies={movies} number={12}/>
                            <SelectGenre movies={movies} number={16}/>
                            <SelectGenre movies={movies} number={35}/>
                            <SelectGenre movies={movies} number={80}/>
                            <SelectGenre movies={movies} number={99}/>
                            <SelectGenre movies={movies} number={18}/>
                            <SelectGenre movies={movies} number={10751}/>
                            <SelectGenre movies={movies} number={14}/>
                            <SelectGenre movies={movies} number={36}/>
                            <SelectGenre movies={movies} number={27}/>
                            <SelectGenre movies={movies} number={10402}/>
                            <SelectGenre movies={movies} number={9648}/>
                            <SelectGenre movies={movies} number={10749}/>
                            <SelectGenre movies={movies} number={878}/>
                            <SelectGenre movies={movies} number={53}/>
                            <SelectGenre movies={movies} number={10752}/>
                            <SelectGenre movies={movies} number={37}/>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ByGenre;