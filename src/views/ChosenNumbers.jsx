import React, { useContext } from "react";
import { NumbersContext } from "src/providers/Providers";
import { ChosenNumbersStyles } from "./ChosenNumbers.styles";

const ChosenNumbers = () => {
   const context = useContext(NumbersContext);
   console.log(context.numbers);
   const SixNumbers = context.numbers.sort((a, b) => a - b);
   return (
      <ChosenNumbersStyles>
         <p>Ihre Zahlen (1 von 12 Feldern):</p>
         <p>
            {SixNumbers.map((number) => (
               <span className="chosenNumber" key={number}>
                  {number}
               </span>
            ))}
         </p>
      </ChosenNumbersStyles>
   );
};

export default ChosenNumbers;
