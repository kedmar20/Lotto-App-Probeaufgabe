import React from "react";
import { MainTemplateStyles } from "./MainTemplate.styles";



const MainTemplate = ({ children }) => {
   return (
      <MainTemplateStyles>
         {/* <Header /> */}
         {children}
         {/* <Footer /> */}
      </MainTemplateStyles>
   );
};
export default MainTemplate;