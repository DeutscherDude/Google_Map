import React, { useState } from "react";
import "../CSS/search.css";

export default function Search({ childToParent }) {
  function handleSubmit(event) {
    console.log(origin);
    console.log(destination);
  }

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div id="search-container">
      <div className="search">
        <div className="origin-input">
          <input
            type="text"
            placeholder="Search for location of origin"
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>
        <div className="destination-input">
          <input
            type="text"
            placeholder="Search for the destination"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            onClick={() =>
              childToParent({
                origin: origin,
                destination: destination,
              })
            }
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
