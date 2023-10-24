import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";

import ThemeContextProvider, { ThemeContext } from "./themeContext";
import { light, dark } from "./theme";
import router from "./router";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {({ themeType }) => (
          <ThemeProvider theme={themeType === "light" ? light : dark}>
            <RouterProvider router={router} />
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  </React.StrictMode>
);
