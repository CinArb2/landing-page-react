import styled from "styled-components";

export const Menu = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 5rem;
  background-color: black;
  right: 0;
  left: 30%;
  bottom: 0;
  display: grid;
  gap: 20px;
  text-align: center;
  place-content: center;
  transition: transform 300ms ease;
  transform:  ${(props)=> props.toggle ? 'translateX(0%)' : 'translateX(100%)'}   
`