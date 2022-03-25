import styled from "styled-components";
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

export const Toggle = styled(FiMenu)`
  color: white;
  font-size: 2rem;

  @media (min-width: ${({theme}) => theme.breakpoint.tablet}){
    display: none;
  }
`
export const ToggleClose = styled(AiOutlineClose)`
  color: white;
  font-size: 2rem;

  @media (min-width: ${({theme}) => theme.breakpoint.tablet}){
    display: none;
  }
`