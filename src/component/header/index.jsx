import React, { useState } from 'react'
import Wrapper from './style'
import Menu from '../menu';


const Header = () => {
  const [ menuOpen , setMenuOpen] = useState(false)
  return (
    <Wrapper>
      <h3>Cricket Scorecard</h3>
    </Wrapper>
  )
}

export default Header



