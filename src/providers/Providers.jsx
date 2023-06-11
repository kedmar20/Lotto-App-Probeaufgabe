import React, { useState } from "react";


export const NumbersContext = React.createContext({
   numbers: [],
   handleAddNumber: () => {},
   deleteNumber: () => {},
});

const NumbersProvider = ({ children }) => {
   const [numbers, setNumbers] = useState([]);

   const deleteNumber = (clickedNumber) => {
      const filteredNumbers = numbers.filter((number) => number !== clickedNumber);
      setNumbers(filteredNumbers);
   };

   const handleAddNumber = (newNumber) => {   
      setNumbers([newNumber, ...numbers]);
   };

   return (
      <NumbersContext.Provider
         value={{
            numbers,
            handleAddNumber,
            deleteNumber,
         }}
      >
         {children}
      </NumbersContext.Provider>
   );
};

export default NumbersProvider;