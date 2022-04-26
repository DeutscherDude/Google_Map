import React, { useEffect, useRef, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Components/Map";
import Search from "./Components/Search";

export default function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: ["places"],
  });

  const directionsRef = useRef(null);

  const [lookupValues, setLookupValues] = useState({
    origin: "",
    destination: "",
  });

  useEffect(() => {
    console.log(lookupValues);
  }, [lookupValues]);

  return isLoaded ? (
    <div>
      <Search childToParent={setLookupValues} />
      <Map
        directions={lookupValues}
        ref={directionsRef}
      />
    </div>
  ) : null;
}
