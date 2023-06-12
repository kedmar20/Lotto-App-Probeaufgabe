import React, {useContext} from 'react'
import { NumbersContext } from 'src/providers/Providers';


const ChosenNumbers = () => {
   const context = useContext(NumbersContext);
   console.log(context.numbers);
   const SixNumbers = context.numbers;
  return (
    <div>
      <span>
        ChoosenNumbers:
        </span>

      {SixNumbers.map((number)=>(
      <span className='chosenNumber'>{number}</span>
      ))}
      
    </div>
  )
}

export default ChosenNumbers
