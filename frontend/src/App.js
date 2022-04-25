import React from "react";
import Map from "./Components/Map";
import Search from "./Components/Search"

function App() {



    return (
        <div>
            <Search />
            <Map origins="Wolsztyn" destination="Poznań"/>
        </div>
    );
}

export default App;
