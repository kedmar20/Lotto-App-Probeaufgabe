import React from 'react'
import NumberButton from 'src/components/atoms/NumberButton/NumberButton';
import { NumberListStyles } from './NumberList.styles';

const NumberList = () => {
    const numbers = [];
    for (let step = 1; step < 50; step++) {
  numbers.push(step)
};
console.log(numbers);
  return (
    <NumberListStyles>
      {  numbers.map((number)=>(
      <NumberButton key={number} number={number}/>
        ))}
    </NumberListStyles>
  )
}

export default NumberList
