import React from "react";
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

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="calculations">Time of the trip: {time(duration)}</div>
        <div className="calculations">
          Trip distance: {distanceKm(distance)}km
        </div>
        <div className="calculations">
          Cost of the trip: {tripCost(distance)}
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
