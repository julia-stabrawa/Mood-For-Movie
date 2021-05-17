import React, {useState} from "react";
import {goGenre} from "../../genres";
import BtnAction from "../atoms/BtnAction";

const ToWatch = ({movies, watched, handleAddClick}) => {

    const all = movies.length > 0 ? movies : [];
    const comedy =  movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(35)) : [];
    const drama = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(18)) : [];
    const animation = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(16)) : [];
    const action = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(28)) : [];
    const sciFi = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(878)) : [];
    const romance = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(10749)) : [];
    const adventure = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(12)) : [];
    const western = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(37)) : [];
    const thriller = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(53)) : [];
    const horror = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(27)) : [];
    const mystery = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(9648)) : [];
    const music = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(10402)) : [];
    const crime = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(80)) : [];
    const war = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(10752)) : [];
    const history = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(27)) : []
    const documentary = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(99)) : [];
    const family = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(10751)) : [];
    const fantasy = movies.length > 0 ? [...movies].filter(el => el.genre_ids.includes(14)) : [];
    const genres = [all, adventure, action, animation, comedy, documentary, drama, family, fantasy, history, war, crime, mystery, music, romance, sciFi, horror, thriller, western];
    const gen = ["all", "adventure", "action", "animation", "comedy", "documentary", "drama", "family", "fantasy", "history", "war", "crime", "mystery", "music", "romance", "sci-fi", "horror", "thriller", "western"];
    const [visibility, setVisibility] = useState([...all]);

    const getGenre = (genre) => {
        setVisibility(genre);
    }

    return (
        <>
            <section className="movies__watch">
                <div className="watch__container">
                    <div className="watch__title">
                        <h2>MOVIES TO WATCH</h2>
                        <div className="genres__btn">{movies.length > 0 ? genres.map((el, i) => <BtnAction clickAction={() => getGenre(el)} text={gen[i].toUpperCase()}/>) : ""}
                        </div>
                    </div>
                    <ul>
                        {visibility.length > 0 ? visibility.map((movie, i) =>
                            <div>{watched.includes(movie) ? "" :
                                <li key={i} className={"movie__element"}>
                                    <div className="movie__details">
                                        <div className="movie__number">{i + 1}</div>
                                        <div className="photo">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                                alt={movie.title}/>
                                        </div>
                                        <div className="movie__info">
                                            <h1>{movie.title}
                                            </h1>
                                            <h2>Genres:</h2>
                                            <p>{movie.genre_ids.map((el) => {
                                                return goGenre(el);
                                            }).join(", ")
                                            }</p>
                                        </div>
                                        <div className="movie__overview">
                                            <h2>Overview:</h2>
                                            <p>{movie.overview}</p>
                                        </div>
                                    </div>
                                    <div className="movie__actions">
                                        <i className="far fa-check-circle"
                                           onClick={() => handleAddClick(movie)}> </i>
                                    </div>
                                </li>
                            }</div>) : "You don't have any movie in your list yet :)"}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ToWatch;
