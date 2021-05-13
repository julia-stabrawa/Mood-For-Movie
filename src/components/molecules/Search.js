import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({searchValue, setSearchValue}) => {

    return (
        <div className="search">
            <input
                className="search__control"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <FontAwesomeIcon icon={faSearch}/>
        </div>
    )
}
export default Search;