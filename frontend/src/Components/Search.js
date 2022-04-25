import React from "react";
import "../CSS/search.css";


const Search = () => {
    return ( 
        <div className="search">
            <div className="search-input">
                <input type="text" placeholder="Search for a location" />
            </div>
            <div className="search-button">
                <button>Search</button>
            </div>
        </div>
     );
}
 
export default Search;
