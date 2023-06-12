import React, {useContext} from 'react'
import { MainTemplateStyles } from "./MainTemplate.styles";
import Header from "src/components/organisms/Header/Header";
import Footer from "src/components/organisms/Footer/Footer";
import { NumbersContext } from 'src/providers/Providers';



const MainTemplate = ({ children }) => {
   //   const context = useContext(NumbersContext);
   return (
      <MainTemplateStyles>
         <Header />
         {children}
         {/* <Footer toggle={context.toggle}/> */}
         <Footer/>
      </MainTemplateStyles>
   );
};
export default MainTemplate;