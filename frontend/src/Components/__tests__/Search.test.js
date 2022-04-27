import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search'

it("renders correctly", () => {
    const div = document.createElement("div");
    div.setAttribute("id", "root");
    ReactDOM.render(<Search />, div);
});