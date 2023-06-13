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
      // console.log(numbers);
      // numbers.length >= 5 ? setToggle(true) : setToggle(false);
      // numbers.length == 6 ? setToggle(true) : setToggle(false);
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
