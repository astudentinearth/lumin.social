import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import "./assets/font/FantasqueSansMono-Regular-decl.css";
import "./assets/font/FantasqueSansMono-Bold-decl.css";
import "./assets/font/FantasqueSansMono-BoldItalic-decl.css";
import "./assets/font/FantasqueSansMono-Italic-decl.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
