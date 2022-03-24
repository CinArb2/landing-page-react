import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  min-height: 450px;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-width: 300px;
  width: ${(props)=> props.size || '28%'};
  min-width: 350px;
  display: grid;
  
  &:hover img{
    transform: scale(1.1)
    }
`

export const CardImgWrapper = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  height: 350px;
  position: relative;
  z-index: -2;
  transition: transform 200ms ease;

  & img{
    width: 100%;
    object-fit: cover;
    height: 100%;
    transition: transform 400ms ease;
  }  
`
export const CardText = styled.p`
  font-weight: 700;
  font-size: clamp(1rem, 5vw, 1,5rem);
  padding: 1rem;
`
export const CardTag = styled.span`
  position: absolute;
  height: 30px;
  background-color: #2784e7;
  bottom: 0;
  left: 10px;
  color: white;
  display: grid;
  place-content:center;
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
`