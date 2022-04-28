import React, { useEffect, useState } from "react";
import "../CSS/sidebar.css";
import { time, distanceKm, tripCost } from "../util";

const Sidebar = ({ distance, duration }) => {
  function onClick() {
    try {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.add("sidebar-toggled");
      sidebar.classList.remove("sidebar");
      document.getElementsByClassName("sidebar-button")[0].style.display =
        "none";
      document.getElementsByClassName(
        "sidebar-button-toggled"
      )[0].style.display = "block";
    } catch (err) {
      const sidebar = document.querySelector(".sidebar-toggled");
      sidebar.classList.add("sidebar");
      sidebar.classList.remove("sidebar-toggled");
      document.getElementsByClassName(
        "sidebar-button-toggled"
      )[0].style.display = "none";
      document.getElementsByClassName("sidebar-button")[0].style.display =
        "block";
    }
  }

  const [kmCost, setKmCost] = useState(0.0701);
  const [cost, setCost] = useState(0);
  const [distanceInKm, setDistanceInKm] = useState(0);

  useEffect(() => {
    let distanceVal = distanceKm(distance);
    let costVal = tripCost(kmCost, distance);
    setDistanceInKm(distanceVal);
    setCost(costVal);
  }, [kmCost, distance]);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="calculations">
          Travel time: {time(duration, distance)}
        </div>
        <div className="calculations">
          Trip distance: {distanceKm(distance)}km
        </div>
        <div className="calculations">Cost of the trip: {cost}</div>
        <div className="labello">
          <label>cost per km</label>
        </div>
        <div className="labello">
          <input
            className="money"
            type="number"
            min="0.01"
            onChange={(e) => setKmCost(e.target.value)}
          ></input>
        </div>
      </div>
      <button onClick={onClick} className="sidebar-button">
        X
      </button>
      <button onClick={onClick} className="sidebar-button-toggled">
        &lt;
      </button>
    </div>
  );
};

export default Sidebar;
