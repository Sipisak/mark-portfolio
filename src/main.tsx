import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./App";
import { PreferencesProvider } from "./preferences";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreferencesProvider>
      <Portfolio />
    </PreferencesProvider>
  </StrictMode>
);
