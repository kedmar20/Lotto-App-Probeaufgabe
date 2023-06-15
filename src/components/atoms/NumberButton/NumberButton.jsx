import React, { useState, useContext } from "react";
import { NumberButtonStyles } from "./NumberButton.styles";
import { NumbersContext } from "src/providers/Providers";

export default function NumberButton({ number, i }) {
   const context = useContext(NumbersContext);
   const [buttonValue, setButtonValue] = useState(number);

   const cross = () => <img src="src/assets/icons/cross.svg" />;

   const AddNumber = (i) => {

      if (context.numbers.length < 6) {
         if (buttonValue == number) {
            setButtonValue(cross);
            context.handleAddNumber(number);
         } else {
            context.deleteNumber(number);
            setButtonValue(number);
         }
      } else {
         context.deleteNumber(number);
         setButtonValue(number);
         return;
      }
   };

   return <NumberButtonStyles onClick={() => AddNumber(i)}>{buttonValue}</NumberButtonStyles>;
}
