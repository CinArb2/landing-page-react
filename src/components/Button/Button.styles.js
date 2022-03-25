import styled from "styled-components";

export const ButtonPrim = styled.button`
  background-color:  ${({theme}) => theme.colour.primary};
  border: 1px solid ${({theme}) => theme.colour.secondary};
  color: ${({theme}) => theme.colour.secondary};
  padding: 0.7rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  margin-block: ${({ theme }) => theme.spacing.marginBlock};
  margin-inline: ${({ theme }) => theme.spacing.marginInline};
  transition: background-color 400ms ease;

  &:hover{
    background-color:  ${({theme}) => theme.colour.secondary};
    color: ${({theme}) => theme.colour.tertiary};
  }
`;

export const ButtonSec = styled(ButtonPrim)`
  background-color:  ${({theme}) => theme.colour.secondary};
  color: ${({theme}) => theme.colour.tertiary};

  &:hover{
    background-color:  ${({theme}) => theme.colour.tertiary};
    border: 1px solid ${({theme}) => theme.colour.tertiary};
    color: ${({theme}) => theme.colour.secondary};
  }
`;
