import React from "react";
import ReactDOM from "react-dom";

import Home from "./components/home.js"

const container = document.querySelector("#app");
const component = <Home />;

ReactDOM.render(component, container);