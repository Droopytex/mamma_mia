import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import PizzasProvider from "./context/PizzaProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzasProvider>
        <App />
      </PizzasProvider>
    </BrowserRouter>
  </React.StrictMode>
);
