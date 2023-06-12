import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { FooterStyles } from './Footer.styles'
import { NumbersContext } from 'src/providers/Providers';

const Footer = () => {
     const context = useContext(NumbersContext);
    //  console.log(context.toggle);
     const toggle = context.toggle;
  return (
    <FooterStyles>
        <img></img>
        <span>

      Löschen
        </span>
        <NavLink to="/chosen">
           
        {
        (toggle)?             
        (<button onClick={()=>context.setToggle(false)}>weiter</button>)
        :''
        }
          
          </NavLink>
    </FooterStyles>
  )
}

export default Footer
