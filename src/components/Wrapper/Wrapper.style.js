import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: ${props => props.minHeight70 || "100vh"};
  text-align: center;
  margin: 0;
  padding: 4rem;
  overflow: hidden;
  position: relative;
  color: ${props => props.secondary ? 'white' : 'black'};
  background-color: ${props => props.bgPrimary ? 'black' : 'none'};
`
