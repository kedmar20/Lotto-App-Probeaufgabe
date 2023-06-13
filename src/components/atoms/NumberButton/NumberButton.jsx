import React, { useState, useContext } from "react";
import { NumberButtonStyles } from './NumberButton.styles'
import { NumbersContext } from "src/providers/Providers";



export default function NumberButton({number, i}) {
  const context = useContext(NumbersContext);
  
  const [buttonValue, setButtonValue] = useState(number);
  
  
  const AddNumber = (i) => {
    console.log(i);
  
  if (context.numbers.length<6) {   
   if (buttonValue==number) {
    setButtonValue('X');
    context.setNumbers([number, ...context.numbers]);
(context.numbers.length==5)?context.setToggle(true):'';
    } else {
      context.deleteNumber(number);
      setButtonValue(number);
    }
  }
  else{
    context.deleteNumber(number);
    context.setToggle(false)
    setButtonValue(number)
    return
  }
}


  return (
    <NumberButtonStyles 
    onClick={()=>AddNumber(i)}>
      {buttonValue}
    </NumberButtonStyles>
  )
}
