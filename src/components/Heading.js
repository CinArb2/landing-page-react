import styled from "styled-components";


export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.extraLarge};
  text-transform: uppercase;
  margin-block: ${({ theme }) => theme.spacing.marginBlock};
`

export const HeadingMed = styled(Heading)`
  font-size: ${({ theme }) => theme.font.size.medium};
  text-transform: none;
  margin-block: ${({ theme }) => theme.spacing.marginBottom};
`
export const HeadingSmall = styled(Heading)`
  font-size: ${({ theme }) => theme.font.size.small};
  text-transform: none;
  margin-block: ${({ theme }) => theme.spacing.marginBottom};
`
