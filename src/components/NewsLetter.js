import React from 'react'
import { ButtonPrim } from './Button/Button.styles'
import { Container } from './Container'
import { HeadingSmall } from './Heading'
import { Input } from './Input'
import {Form} from './Form'

const NewsLetter = () => {
  return (
    <Container block>
      <HeadingSmall>Join the adventure newsletter to receive our best vacation deals</HeadingSmall>
      <Form>
        <label>You can subscribe a any time</label>
        <Input type='text' ></Input>
        <ButtonPrim>Subscribe</ButtonPrim>
      </Form>
    </Container>
  )
}

export default NewsLetter