import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
import { ThemeProvider } from "../components/base/ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
