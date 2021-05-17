import React from "react";

const SelectMood = ({mood, text}) => {
    const randomMood = mood[Math.floor(Math.random() * mood.length)];

    return (
        <li className="genre__element">
            <h2>{text}</h2>
            <div className="photo">
                {mood.length > 0 ?
                    <div>
                        <img
                            alt={randomMood.title}
                            src={`https://image.tmdb.org/t/p/w200${randomMood.poster_path}`}/>
                        <h3 className="type__title">{randomMood.title}</h3>
                    </div>
                    : <div className="blank"> </div>

                }</div>
        </li>
    )
}

export default SelectMood;