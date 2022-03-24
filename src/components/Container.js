import styled, {css} from 'styled-components'

export const Container = styled.div`
  
  ${props =>
    props.grid &&
    css`
      display: grid;
      place-content: center;
      min-height: 80vh;
    `}

  ${props =>
    props.block &&
    css`
      display: block;
    `}
  ${props =>
    props.flex &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      align-items: center;
      align-content: center;
    `}
`

