import React from 'react';

function SearchBar(props) {
  return (
    <div>
        <label>Filter the Users:</label>
        <input type="search" id="gsearch" name="gsearch" onChange={props.onChange} value={props.value}/>
        <input type="submit"></input>
    </div>
  );
}

export default SearchBar;