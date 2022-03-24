import { NavLink } from 'react-router-dom'
import styled from "styled-components";


export const StyledNavLink = styled(NavLink)`
  color: ${({theme}) => theme.colour.secondary};
  text-decoration: none;
  padding: 1rem;

  &.active{
    color: ${({theme}) => theme.colour.lightBlue};
    font-size: 1.3rem;
    font-weight: 700;
  }
`