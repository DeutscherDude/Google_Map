import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import "../CSS/Map.css";
require('dotenv').config();

const containerStyle = {
    width: '1600px',
    height: '1000px'
};

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

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);

    return isLoaded ? (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                zoom={8}
                center={center}
                onUnmount={onUnmount}
                onLoad={onLoad}
            ></GoogleMap>
        </div> 
    ) : <></>;
}
 
export default Map;