import React, { useState } from "react";
import "../CSS/search.css";

const Search = () => {
    
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    function handleSubmit(event){
        console.log(origin);
        console.log(destination);
    }

    return (
        <div>
            <div className="search">
                <div className="origin-input">
                    <input type="text" placeholder="Search for a location of origin" onChange={(e) => setOrigin(e.target.value)}/>
                </div>
                <div className="destination-input">
                    <input type="text" placeholder="Search for the destination" onChange={(e) => setDestination(e.target.value)}/>
                </div>
                <div className="search-button" onClick={handleSubmit}>
                    <button>Search</button>
                </div>
            </div>
        </div>
     );
}
 
export default Search;
