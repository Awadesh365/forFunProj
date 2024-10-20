import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignIn from "./components/SignIn.jsx";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
