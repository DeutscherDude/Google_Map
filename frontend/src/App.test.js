import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it ("renders correctly", () => {
    const div = document.createElement("div");
    div.setAttribute("id", "root");
    ReactDOM.render(<App />, div);
})