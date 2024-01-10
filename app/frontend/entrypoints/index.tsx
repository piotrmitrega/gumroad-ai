import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
import { ThemeProvider } from "../components/base/ThemeProvider";
import { AppRoutes } from "../components/routing/AppRoutes";
import { AppLayoutWrapper } from "../components/layout/AppLayoutWrapper";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AppLayoutWrapper>
          <Navbar />
          <AppRoutes />
        </AppLayoutWrapper>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
