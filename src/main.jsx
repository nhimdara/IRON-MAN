import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/app/App";
import "./styles.css";

document.documentElement.dataset.theme = localStorage.getItem("portfolio-theme") ||
  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
document.documentElement.dataset.motion = localStorage.getItem("portfolio-motion") ||
  (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "reduced" : "full");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
