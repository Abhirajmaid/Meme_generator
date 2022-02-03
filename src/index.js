// import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

// const Hello = (
//   <div>
//     <h1>Hello JD, how are You!</h1>
//   </div>
// );

//# JSX => give Plain JS objects, 'ReactDOM.render' convert that Object into boweser readable (Real DOM) elements.

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
