import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "../CSS/Map.css";

function size() {
    return {
        height: window.innerHeight,
        width: window.innerWidth
    }
}

const Map = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    });
    
    const [map, setMap] = useState(null);

    const [coordinates, setCoordinates] = useState({ lat: 52.4095238, lng: 16.931992 });

    const [ dim, setDim ] = useState(size());

    const _handleWindowResize = () => {
        let currentSize = size();
        setDim(currentSize);
    };

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
        window.removeEventListener('resize', _handleWindowResize)
    }, []);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        window.addEventListener('resize', _handleWindowResize);
        setMap(map)
        map.panTo(coordinates)
    }, []);

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={dim}
                center={coordinates}
                zoom={1}
                onUnmount={onUnmount}
                onLoad={onLoad}

            ></GoogleMap>
        </div> 
    ) : <></>;
}
 
export default Map;