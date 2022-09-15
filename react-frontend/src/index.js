import React from "react";
// import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./index.css";

// ReactDOM.render(<MyApp />, document.getElementById("root"));

const container = document.getElementById("root");
// Create a root

const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the Root
root.render(<MyApp />);
