import React, { useState } from 'react'
import StyledNavLink from './NavLink'
import ButtonPrim from '../Button/Button'
import StyledPacman from './Logo'
import { NavbarStyled } from './Navbar.style'
import { NavbarMenu } from './NavbarMenu'
import { Toggle, ToggleClose } from './Toggle'
import { Menu } from './Menu'

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false)

  const handleClick = () => setIsToggle(prev => !prev)
  
  return (
    <NavbarStyled>
      <StyledPacman />
      <NavbarMenu>
        <StyledNavLink to='#hero' smooth>Home</StyledNavLink>
        <StyledNavLink to='#services' smooth>Services</StyledNavLink>
        <StyledNavLink to='#footer' smooth>Contact us</StyledNavLink>
        <ButtonPrim>Sign up</ButtonPrim>
      </NavbarMenu>
      { isToggle ? <ToggleClose onClick={handleClick}/> : <Toggle onClick={handleClick}/> }
      <Menu toggle={isToggle}>
        <StyledNavLink to='#hero' smooth>Home</StyledNavLink>
        <StyledNavLink to='#services' smooth>Services</StyledNavLink>
        <StyledNavLink to='#footer' smooth>Contact us</StyledNavLink>
      </Menu>
    </NavbarStyled>
  )
}

export default Navbar