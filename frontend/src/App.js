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

  const updateParent = (newValues) => {
    setLookupValues(newValues);
    console.log(lookupValues)
};


  return isLoaded ? (
    <div>
      <Search childToParent={updateParent} />
      <Map
        origin={lookupValues.origin}
        destination={lookupValues.destination}
      />
    </div>
  ) : null;
}
