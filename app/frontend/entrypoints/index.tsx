import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "../components/base/ThemeProvider";
import { AppRoutes } from "../components/routing/AppRoutes";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ThemeProvider>
);
