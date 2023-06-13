import React, { useState, useContext } from "react";
import { NumberButtonStyles } from "./NumberButton.styles";
import { NumbersContext } from "src/providers/Providers";

export default function NumberButton({ number, i }) {
   const context = useContext(NumbersContext);

   const [buttonValue, setButtonValue] = useState(number);

   const AddNumber = (i) => {
      // console.log(i);
      console.log(context.numbers.length);

      if (context.numbers.length < 6) {
         context.numbers.length >= 5 ? context.setToggle(true) : "";
         // context.numbers.length >= 5 ? context.setToggle(true) : context.setToggle(false);
         if (buttonValue == number) {
            setButtonValue("X");
            // context.setNumbers([number, ...context.numbers]);
            context.handleAddNumber(number);
         } else {
            context.deleteNumber(number);
            setButtonValue(number);
            context.setToggle(false);
         }
      } else {
         context.deleteNumber(number);
         //  context.setToggle(false);

         context.numbers.length <= 6 && buttonValue == "X" ? context.setToggle(false) : "";
         //  context.numbers.length <= 5 ? context.setToggle(false) : "";
         setButtonValue(number);
         return;
      }
   };

   return <NumberButtonStyles onClick={() => AddNumber(i)}>{buttonValue}</NumberButtonStyles>;
}
