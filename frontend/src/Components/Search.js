import React from "react";
import usePlacesAutocomplete from "use-places-autocomplete";
import "../CSS/search.css";

export default function Search() {
  // const {
  //   ready,
  //   value,
  //   setValue,
  //   suggestions: { status, data },
  //   clearSuggestions,
  // } = usePlacesAutocomplete();

  function handleSubmit(event) {
    console.log(origin);
    console.log(destination);
  }

  return (
    <div>
      <div className="search">
        <div className="origin-input">
          <input type="text" placeholder="Search for location of origin" />
        </div>
        <div className="destination-input">
          <input type="text" placeholder="Search for the destination" />
        </div>
        <div className="search-button">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
