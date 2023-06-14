import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FooterStyles } from "./Footer.styles";
import { NumbersContext } from "src/providers/Providers";

const Footer = () => {
   const context = useContext(NumbersContext);
   const refresh = () => {
      context.setNumbers([]);
      window.location.toString().includes("chosen") ? "" : window.location.reload();
   };

   return (
      <FooterStyles>
         <NavLink to="/">
            <img src="src/assets/icons/trash.svg" onClick={() => refresh()} />
         </NavLink>
         <span>Löschen</span>
         <NavLink to="/chosen">{context.numbers.length >= 6 ? <button>WEITER</button> : ""}</NavLink>
      </FooterStyles>
   );
};

export default Footer;
