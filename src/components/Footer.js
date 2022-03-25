import React from 'react'
import { Container } from './Container'
import { ListContact } from './ListContact'
import NewsLetter from './NewsLetter'
import { Wrapper } from './Wrapper/Wrapper.style'
import dataFooter from '../footerInfo.json'
import { HeadingSmall } from './Heading'

const Footer = () => {

  return (
    <Wrapper secondary bgPrimary minHeight70="50vh" id='footer'>
      <NewsLetter />
      <Container flex>
        {
          dataFooter.data.map(el => (
            <ListContact key={el.id}>
              <HeadingSmall>{el.title}</HeadingSmall>
              <p>{el.text1}</p>
              <p>{el.text2}</p>
              <p>{el.text3}</p>
              <p>{el.text4}</p>
            </ListContact>
          ))
        }
      </Container>
    </Wrapper>
  )
}

export default Footer