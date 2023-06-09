import React from 'react'
import { NumberButtonStyles } from './NumberButton.styles'

export default function NumberButton({number}) {
  return (
    <NumberButtonStyles>
      {number}
    </NumberButtonStyles>
  )
}
