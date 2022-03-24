import React from 'react'
import StyledNavLink from './NavLink'
import ButtonPrim from '../Button/Button'
import StyledPacman from './Logo'
import { NavbarStyled } from './Navbar.style'

const Navbar = () => {
  return (
    <NavbarStyled>
      <StyledPacman />
      <div>
        <StyledNavLink to='/'>Home</StyledNavLink>
        <StyledNavLink to='/services'>Services</StyledNavLink>
        <StyledNavLink to='/products'>Products</StyledNavLink>
        <ButtonPrim>Sign up</ButtonPrim>
      </div>
    </NavbarStyled>
  )
}

export default Navbar