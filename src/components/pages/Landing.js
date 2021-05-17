import React from 'react';
import ByGenre from "../organisms/ByGenre";
import ByMood from "../organisms/ByMood";

const Landing = ({movies}) => {
    return (
        <>
            <ByGenre movies={movies}/>
            <ByMood movies={movies}/>
        </>
    );
}

export default Landing;