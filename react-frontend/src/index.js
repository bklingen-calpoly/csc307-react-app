import React from "react";
// test:wq

import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./index.css";

const container = document.getElementById("root");
// Create a root

const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the Root
root.render(<MyApp />);
