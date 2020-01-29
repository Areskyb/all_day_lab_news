import React, { Component } from 'react';

const SearchBar = (props) => {
    function handleStorySearch(event){
        props.onSearch(event.target.value)
    }

    return(
        <div className="search-bar">
        <label>Search for news: </label>
        <input type="text" onChange={handleStorySearch}></input>
        </div>
    )
}

export default SearchBar;