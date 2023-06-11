import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.module.scss";
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faEnvelope, faBars, faGithub, faLinkedin);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
