import React, { useEffect, useState, useCallback, useRef } from "react";
import { GoogleMap, useJsApiLoader, InfoWindow, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import "../CSS/Map.css";

function size() {
    return {
        height: window.innerHeight,
        width: window.innerWidth
    }
}

const Map = (props) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        language: 'pl',
    });
    
    const [map, setMap] = useState(null);

    const [coordinates, setCoordinates] = useState({ lat: 52.4095238, lng: 16.931992 });

    const [directionsService, setDirectionsService] = useState(null);

    const [ dim, setDim ] = useState(size());

    const _handleWindowResize = (e) => {
        e.preventDefault();
        let currentSize = size();
        setDim(currentSize);
    };

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
        window.removeEventListener('resize', _handleWindowResize)
    }, []);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        
        map.fitBounds(bounds);
        window.addEventListener('resize', _handleWindowResize);
        
        const marker = new window.google.maps.Marker({
            position: coordinates,
            map: map,
        });

        const directionsRenderer = new window.google.maps.DirectionsRenderer();

        directionsRenderer.setMap(map);

        setMap(map)
        map.panTo(coordinates)
    }, []);

    useEffect(() => {
        if (isLoaded) {
            var request = {
                origin: props.origins,
                destination: props.destination,
                travelMode: 'DRIVING'
            };

            const directionsService = new window.google.maps.DirectionsService()
                        
            new Promise((resolve, reject) => {
                directionsService.route(
                    {
                        origin: props.origins,
                        destination: props.destination,
                        travelMode: 'DRIVING'
                    },
                (result, status) => {
                    if (status === 'OK') {
                        resolve(result)
                        
                    } else {
                        reject(status)
                    }
                }
                )
            })
        }
    }, [isLoaded, directionsService]);

    return isLoaded ? (
        <div className="map">
            <GoogleMap
                mapContainerStyle={dim}
                center={coordinates}
                zoom={1}
                onUnmount={onUnmount}
                onLoad={onLoad}
            ></GoogleMap>
            { props ? <DirectionsRenderer></DirectionsRenderer> : <></>}
        </div> 
    ) : <></>;
}
 
export default Map;