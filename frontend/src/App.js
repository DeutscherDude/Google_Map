import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import Map from "./Components/Map";
import Search from "./Components/Search"

function App() {

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries: ["places"]
    });

    return isLoaded ? ((
        <div>
            <Search />
            <Map origins="Wolsztyn" destination="Poznań"/>
        </div>
    )) : null;
}

export default App;
