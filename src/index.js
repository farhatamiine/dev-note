import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./service/serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
