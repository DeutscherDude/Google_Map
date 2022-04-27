import React, { useEffect, useRef, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Components/Map";
import Search from "./Components/Search";

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

  const time = () => {
    let travelTimeHours = Math.floor(duration/(60*60));
    let travelTimeMinutes = Math.ceil((duration%(60*60))/60);
    return `${travelTimeHours}hrs ${travelTimeMinutes}mins`;
  }

  const getMetrics = (receivedDistance, receivedDuration) => {
    setDistance(receivedDistance);
    setDuration(receivedDuration);
  };

  const updateParent = (newValues) => {
    setLookupValues(newValues);
  };

  return isLoaded ? (
    <div>
      <div>{time()}</div>
      <Search childToParent={updateParent} />
      <Map directions={lookupValues} childToParent={getMetrics} />
    </div>
  ) : null;
}
