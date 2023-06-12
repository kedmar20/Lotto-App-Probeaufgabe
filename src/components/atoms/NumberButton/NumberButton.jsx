import React, { useState, useContext } from "react";
import { NumberButtonStyles } from './NumberButton.styles'
import { NumbersContext } from "src/providers/Providers";



export default function NumberButton({number, i}) {
  const context = useContext(NumbersContext);
  
  const [buttonValue, setButtonValue] = useState(number);
  
  
  const AddNumber = (i) => {
    console.log(i);
  // console.log(e.target.value);
  // console.log(context.numbers.length);
  
  if (context.numbers.length<6) {   
  //  console.log('clicked');
   if (buttonValue==number) {
    setButtonValue('X');
    // context.handleAddNumber(number);
    context.setNumbers([number, ...context.numbers]);
(context.numbers.length>=5)?context.setToggle(true):'';
    } else {
      context.deleteNumber(number);
      setButtonValue(number);
    }
    // console.log(context.numbers);
  }
  else{
    
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
