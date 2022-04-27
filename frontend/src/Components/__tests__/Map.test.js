import React from "react";
import ReactDOM from "react-dom";
import Map from "../Map";
import setupGoogleMock from "../../../__mocks__/googleMock";

beforeAll(() => {
    setupGoogleMock();
});


it("renders correctly", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "map");
  ReactDOM.render(<Map directions={{
    origin: "Poznań",
    destination: "Poznań, Stary Rynek",
  }}/>, div);
});
