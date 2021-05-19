import React from 'react';

const MovieSearch = ({movies, handleAddClick}) => {

    return (
        <div className="search__carousel">
            {movies.map((movie, i) =>
                <div className="search__result" key={i} onClick={() => handleAddClick(movie)}>
                    <img
                        className="search__image"
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <h2>{movie.title}</h2>
                </div>)
            }
        </div>
    )
}
export default MovieSearch;