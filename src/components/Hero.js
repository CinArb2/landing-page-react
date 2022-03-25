import React from 'react'
import { Wrapper } from './Wrapper/Wrapper.style'
import { VideoHero } from './video'
import ButtonPrim, { ButtonSec } from './Button/Button'
import { Container } from './Container'
import { Heading, HeadingMed } from './Heading'

const Hero = () => {
  return (
    <Wrapper secondary id='hero'>
      <Container grid>
        <Container block>
          <Heading>Adventure awaits</Heading>
          <HeadingMed>What are you waiting for?</HeadingMed>
          <ButtonPrim>Get started</ButtonPrim>
          <ButtonSec>watch trailer</ButtonSec>
        </Container>
        <VideoHero autoPlay muted loop>
          <source src="./videos/video.mp4" type="video/mp4"/>
        </VideoHero>
      </Container>
    </Wrapper>
  )
}

export default Hero