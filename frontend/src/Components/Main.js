import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/main.css";

function Main({ childToParent }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  let navigate = useNavigate();

  function wrapper() {
    childToParent({
      origin: origin,
      destination: destination,
    });
    navigate("/search");
  }

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
          <button onClick={() => wrapper()}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
