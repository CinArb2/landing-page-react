import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colour.tertiary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  top: 0;
  z-index: 2;
`