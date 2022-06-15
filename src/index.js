//const React = require("react"); //this is the same as line below (js6)
import React from "react";
//const ReactDom = require("react-dom"); //this is the same as in js6 line below
import ReactDom from "react-dom";

ReactDom.render(
  <>
    <h1>Hello World!</h1>
    <p> this is a paragraph</p>
  </>,
  document.getElementById("root")
);
