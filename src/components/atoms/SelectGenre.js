import React from "react";
import {goGenre} from "../../genres";

const SelectGenre = ({movies, number}) => {
    const newType = [...movies]
    const type = newType.filter(el => {
        return el.genre_ids.includes(number);
    })
    const randomType = type[Math.floor(Math.random() * type.length)];
    const genreType = goGenre(number)

    return (
        <li className="genre__element">
            <h2>{genreType}</h2>
            <div className="photo">
                {type.length > 0 ?
                    <div>
                        <img
                            alt={randomType.title}
                            src={`https://image.tmdb.org/t/p/w200${randomType.poster_path}`}/>
                        <h3 className="type__title">{randomType.title}</h3>
                    </div>
                    : <div className="blank"> </div>

                }</div>
        </li>
    )
}

export default SelectGenre;