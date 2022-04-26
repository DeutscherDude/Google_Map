import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import {
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "../CSS/Map.css";

function size() {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  };
}

export default function Map (props) {

  const [map, setMap] = useState(null);
  const [coordinates, setCoordinates] = useState({
    lat: 52.4095238,
    lng: 16.931992,
  });
  const [directions, setDirections] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [dim, setDim] = useState(size());

  const _handleWindowResize = (e) => {
    e.preventDefault();
    let currentSize = size();
    setDim(currentSize);
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
    setCoordinates(null);
    window.removeEventListener("resize", _handleWindowResize);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();

      new Promise((resolve, reject) => {
        directionsService
          .route(
            {
              origin: props.origins,
              destination: props.destination,
              travelMode: "DRIVING",
            },
            (result, status) => {
              if (status === "OK") {
                setDirections(result);
              } else {
                reject(status);
              }
            }
          )
          .catch((e) => console.log(e));
      });
    }
  }, [isLoaded]);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();

    map.fitBounds(bounds);
    window.addEventListener("resize", _handleWindowResize);
    setMap(map);
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
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  )
};
