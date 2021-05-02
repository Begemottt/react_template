import '../scss/styles.scss';
import html from '../index.html';
import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/Message";

ReactDOM.render(<Message name="Robin" />, document.getElementById("main"));