import React from 'react'
import NumberButton from 'src/components/atoms/NumberButton/NumberButton';
import { NumberListStyles } from './NumberList.styles';

const NumberList = () => {
    const numbers = [];
    for (let step = 1; step < 50; step++) {
  numbers.push(step)
};
  return (
    <NumberListStyles>
      {  numbers.map((number, i)=>{
      return(
      <NumberButton key={number} number={number} i={i+1}/>
        )})}
    </NumberListStyles>
  )
}

export default NumberList
