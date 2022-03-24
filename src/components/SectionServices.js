import React from 'react'
import { Wrapper } from './Wrapper/Wrapper.style'
import CardWrapper, { CardImgWrapper, CardText, CardTag } from '../components/Card/Card'
import { Container } from './Container'
import { HeadingMed } from './Heading'
import data from '../services.json'

const SectionServices = () => {

  return (
    <Wrapper>
      <HeadingMed>Check out this EPIC destinations!</HeadingMed>
      <Container flex gridType='columns'>
        {
          data.data.map(el => (
            <CardWrapper key={el.id} size={el.size}>
              <CardImgWrapper>
                <img src={el.src} alt='img-card' />
                <CardTag>{el.tag}</CardTag>
              </CardImgWrapper>
              <CardText>{el.body}</CardText>
            </CardWrapper>
          ))
        }
      </Container>
    </Wrapper>
  )
}

export default SectionServices