import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "theme-ui";

import { theme } from "@core";

import App from "./App";
import GlobalStyles from "./global-styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
