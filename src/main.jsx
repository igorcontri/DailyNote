import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.js";
import theme from "./styles/theme.js";

// import { Details } from './pages/Details/index.jsx'
// import { Home } from "./pages/Home/index.jsx";
// import { SignIn } from "./pages/SignIn/index.jsx";
import { SignUp } from "./pages/SignUp/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {/* <Details /> */}
            {/* <Home /> */}
            {/* <SignIn /> */}
            <SignUp />
        </ThemeProvider>
    </React.StrictMode>
);
