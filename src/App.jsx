import React from "react";
import "src/index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "src/assets/styles/theme";
import { Outlet } from "react-router-dom";
import MainTemplate from "src/components/templates/MainTemplate/MainTemplate";
import NumbersProvider from "./providers/Providers";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <NumbersProvider>
            <MainTemplate>
               <Outlet />
            </MainTemplate>
         </NumbersProvider>
      </ThemeProvider>
   );
}

export default App;
