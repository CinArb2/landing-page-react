import styled from "styled-components";

export const ListContact = styled.section`
  width: 90%;
  max-width: 200px;
  align-self: flex-start;

  & *{
    padding-block: 0.5rem;
  }

  @media (min-width: ${({theme}) => theme.breakpoint.tablet}){
    text-align: left;
  }
`