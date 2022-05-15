import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { amber, pink } from "@mui/material/colors";

import App from "./components/Structural/App";

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const theme = createTheme({
  palette: {
    primary: pink,
    secondary: amber,
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
