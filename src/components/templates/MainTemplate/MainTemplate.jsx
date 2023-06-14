import React from "react";
import { MainTemplateStyles } from "./MainTemplate.styles";
import Header from "src/components/organisms/Header/Header";
import Footer from "src/components/organisms/Footer/Footer";

const MainTemplate = ({ children }) => {
   return (
      <MainTemplateStyles>
         <Header />
         {children}
         <Footer />
      </MainTemplateStyles>
   );
};
export default MainTemplate;
