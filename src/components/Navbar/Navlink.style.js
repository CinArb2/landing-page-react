import { HashLink as Link } from 'react-router-hash-link'
import styled from "styled-components";


export const StyledNavLink = styled(Link)`
  color: ${({theme}) => theme.colour.secondary};
  text-decoration: none;
  padding: 1rem;

  &.active{
    color: ${({theme}) => theme.colour.lightBlue};
    font-size: 1.3rem;
    font-weight: 700;
  }
`