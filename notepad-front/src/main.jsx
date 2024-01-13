import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global.js";
import { ThemeProvider } from "styled-components";

import { MyContext } from "./myContext";

import { Routes } from "./routes";

import theme from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MyContext.Provider
        value={{ name: "Igor", email: "igorcontri@gmail.com" }}
      >
        <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
