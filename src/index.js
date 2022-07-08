import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./css/index.css";
import * as serviceWorkerRegistration from "./service/serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-b0qlmps8.us.auth0.com"
      clientId="LZxMyVBViqRZ5KTMjLmRf1iDqeyTBhot"
      redirectUri={window.location.origin}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
