import React from 'react'
import { Wrapper } from './Wrapper/Wrapper.style'
import { VideoHero } from './video'
import ButtonPrim, { ButtonSec } from './Button/Button'
import { Container } from './Container'
import { Heading } from './Heading'

const Hero = () => {
  return (
    <Wrapper secondary>
      <Container grid>
        <Container block>
          <Heading>Adventure awaits</Heading>
          <p>What are you waiting for?</p>
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