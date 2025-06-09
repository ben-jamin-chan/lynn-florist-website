import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import this
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/lynn-florist-website"> {/* ✅ Add this */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
