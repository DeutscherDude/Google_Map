import React, { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Components/Map";
import Search from "./Components/Search";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";

export default function App() {
  const [libraries] = useState(["places"]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: libraries,
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
    <BrowserRouter>
      <Routes>
        <Route
          exact path="/map"
          element={
            <div>
              <Sidebar distance={distance} duration={duration} />
              <Search childToParent={updateParent} />
              <Map directions={lookupValues} childToParent={getMetrics} />
            </div>
          }
        />
        <Route
          exact path="/"
          element={
          <div>
          <Main childToParent={updateParent} />
          </div>}
        />
      </Routes>
    </BrowserRouter>
  ) : null;
}
