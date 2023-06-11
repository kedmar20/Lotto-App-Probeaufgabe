import React, { useState, useContext } from "react";
import { NumberButtonStyles } from './NumberButton.styles'
import { NumbersContext } from "src/providers/Providers";



export default function NumberButton({number}) {
  const context = useContext(NumbersContext);

const [buttonValue, setButtonValue] = useState(number);

const AddNumber = () => {
   console.log(context.numbers);
   console.log('clicked');
   setButtonValue('X');
   if (buttonValue==number) {
    context.handleAddNumber(number);
  } else {
    context.deleteNumber(number);
  }
  console.log(context.numbers);
}

// const buttonValue = ()=>{
//   if 
// return (number)
// }

  return (
    <NumberButtonStyles onClick={()=>AddNumber()}>
      {buttonValue}
    </NumberButtonStyles>
  )
}
