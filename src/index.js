import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<ToastContainer position="top-center"></ToastContainer>
	</React.StrictMode>,
	document.getElementById("root")
);
