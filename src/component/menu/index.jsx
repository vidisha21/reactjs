import React from 'react'
import Wrapper from './style'

const Menu = ({setMenuOpen}) => {
  return (
    <Wrapper>
        <ul>

            <li onClick={ e => setMenuOpen(false)}> Reset </li>
        </ul>
      
    </Wrapper>
  )
}


  export default Menu