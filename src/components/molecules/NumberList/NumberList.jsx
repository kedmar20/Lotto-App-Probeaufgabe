import React from 'react'
import NumberButton from 'src/components/atoms/NumberButton/NumberButton';

const NumberList = () => {
    const numbers = [];
    for (let step = 1; step < 50; step++) {
  numbers.push(step)
};
console.log(numbers);
  return (
    <div>
      {  numbers.map((number)=>(
      <NumberButton number={number}/>
        ))}
    </div>
  )
}

export default NumberList
