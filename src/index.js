import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";


// wrap the app in browser router component 
// don't for get => npm install react-router-dom
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
