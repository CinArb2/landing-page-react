import styled from "styled-components";

export const NavbarMenu = styled.div`
  display: none;

  @media (min-width: ${({theme}) => theme.breakpoint.tablet}){
    display: block;
  }
`