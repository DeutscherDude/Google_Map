import React, { useRef, useState, useCallback, useEffect } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import "../CSS/Map.css";

function size() {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  };
}

export default function Map({ directions }) {
  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: 52.4095238,
    lng: 16.931992,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [dim, setDim] = useState(size());
  const [road, setRoad] = useState();
  const prevDirections = useRef();

  //Dynamic map resizing callback
  const _handleWindowResize = (e) => {
    e.preventDefault();
    let currentSize = size();
    setDim(currentSize);
  };

  console.log(directions);

  //Postmortem removal of event listener
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
    setCoordinates(null);
    setIsLoaded(false);
    window.removeEventListener("resize", _handleWindowResize);
  }, []);

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    new Promise((resolve, reject) => {
      directionsService
        .route(
          {
            origin: directions.origin,
            destination: directions.destination,
            travelMode: "DRIVING",
          },
          (result, status) => {
            if (status === "OK") {
              console.log(result);
              setRoad(result);
            } else {
              reject(status);
            }
          }
        )
        .catch((e) => console.log(e));
    });
  }, [directions]);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    console.log("I rendered!");
    map.fitBounds(bounds);
    window.addEventListener("resize", _handleWindowResize);
    setMap(map);
    map.panTo(coordinates);
    setIsLoaded(true);
  }, []);

  return (
    <div className="map" directions={directions}>
      <GoogleMap
        mapContainerStyle={dim}
        zoom={3}
        onUnmount={onUnmount}
        onLoad={onLoad}
      >
        {road && <DirectionsRenderer directions={road} />}
      </GoogleMap>
    </div>
  );
}
