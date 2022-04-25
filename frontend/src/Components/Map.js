import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "../CSS/Map.css";

function size() {
    return {
        height: window.innerHeight,
        width: window.innerWidth
    }
}

const center = {
    lat: 52,
    lng: 20
};


const Map = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    });
    
    const [map, setMap] = React.useState(null);

    const [ dim, setDim ] = React.useState(size());

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
        map.setCenter({ lat: 50, lng: 20});
        window.addEventListener('resize', _handleWindowResize);
        setMap(map)
    }, []);

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={dim}
                center={center}
                zoom={8}
                onUnmount={onUnmount}
                onLoad={onLoad}
            ></GoogleMap>
        </div> 
    ) : <></>;
}
 
export default Map;