import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FooterStyles } from "./Footer.styles";
import { NumbersContext } from "src/providers/Providers";

const Footer = () => {
   const context = useContext(NumbersContext);

   return (
      <FooterStyles>
         <img></img>
         <span>Löschen</span>
         <NavLink to="/chosen">{context.numbers.length >= 6 ? <button>weiter</button> : ""}</NavLink>
      </FooterStyles>
   );
};

export default Footer;
