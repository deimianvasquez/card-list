//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./App.jsx";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));

// useState
// controlando los input 
// propTypes --> valida tipos de props que se pasan en componentes
// props --> properties