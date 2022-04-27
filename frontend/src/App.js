import React, { useEffect, useRef, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Components/Map";
import Search from "./Components/Search";
import { time, distanceKm, tripCost } from "./util";
import Sidebar from "./Components/Sidebar";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });

  const [lookupValues, setLookupValues] = useState({
    origin: "Poznań",
    destination: "Poznań, Stary Rynek",
  });

  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const getMetrics = (receivedDistance, receivedDuration) => {
    setDistance(receivedDistance);
    setDuration(receivedDuration);
  };

  const updateParent = (newValues) => {
    setLookupValues(newValues);
  };

  return isLoaded ? (
    <div>
      <div>Time of the trip: {time(duration)}</div>
      <div>Distance of the trip: {distanceKm(distance)}</div>
      <div>Cost of the trip: {tripCost(distance)}</div>
      <Sidebar/>
      <Search childToParent={updateParent} />
      <Map directions={lookupValues} childToParent={getMetrics} />
    </div>
  ) : null;
}
