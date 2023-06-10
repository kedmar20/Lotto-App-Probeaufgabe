import React from 'react'
import { HeaderStyles } from './Header.styles'

const Header = () => {
  return (
    <HeaderStyles>
        <span>

      Ihr Spielfeld
        </span>
        <span className='textHeaderRight'>
            1 von 12
        </span>
    </HeaderStyles>
  )
}

export default Header
