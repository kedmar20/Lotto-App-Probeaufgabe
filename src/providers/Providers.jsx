import React, { useState } from "react";

export const NumbersContext = React.createContext({
   numbers: [],
   handleAddNumber: () => {},
   deleteNumber: () => {},
   toggle: false,
   setToggle: () => {},
   setNumbers: () => {},
});

const NumbersProvider = ({ children }) => {
   const [numbers, setNumbers] = useState([]);
   const [toggle, setToggle] = useState(false);

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
            toggle,
            setToggle,
            setNumbers,
         }}
      >
         {children}
      </NumbersContext.Provider>
   );
};

export default NumbersProvider;
