import React, { useRef, useState, useCallback, useEffect } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import "../CSS/Map.css";

function size() {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  };
}

export default function Map({ origin, destination }) {
  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: 52.4095238,
    lng: 16.931992,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [dim, setDim] = useState(size());
  const [origins, setOrigins] = useState();
  const [directions, setDirections] = useState();
  const prevDirections = useRef();

  //Dynamic map resizing callback
  const _handleWindowResize = (e) => {
    e.preventDefault();
    let currentSize = size();
    setDim(currentSize);
  };

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
            origin: origin,
            destination: destination,
            travelMode: "DRIVING",
          },
          (result, status) => {
            if (status === "OK") {
              console.log(result)
              setDirections(result);
            } else {
              reject(status);
            }
          }
        )
        .catch((e) => console.log(e));
    });
  }, [origins]);
 
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    console.log("I rendered!");
    map.fitBounds(bounds);
    window.addEventListener("resize", _handleWindowResize);
    setMap(map);
    setOrigins(origin);
    setDirections(destination);
    map.panTo(coordinates);
    setIsLoaded(true);
  }, []);

  return (
    <div className="map">
      <GoogleMap
        mapContainerStyle={dim}
        zoom={3}
        onUnmount={onUnmount}
        onLoad={onLoad}
        origin={origin}
        destination={destination}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
          />
        )}
      </GoogleMap>
    </div>
  );
}
