import React from 'react'
import styled from 'styled-components'
import Introduction from '../components/Introduction'
import IntroProfile from '../components/IntroProfile'
import Projects from '../components/Projects'
import About from '../components/About'
import IntroductionEmail from '../components/IntroductionEmail'
import Testimonies from '../components/Testimonies'
import Questions from '../components/Questions'
import Location from '../components/Location'
import Footer from '../components/Footer'

function Home() {
  
  return (
    <Container>

        <Introduction />

        <About />

        <IntroProfile />

        <Projects />

        <IntroductionEmail />
        
        <Testimonies />

        <Questions />

         <Location />

         <Footer />


    </Container>
  )
}

const Container = styled.div`
  .introduction {
    width: 100%;
    height: 100vh; 
    display: flex;
  }
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .description{
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color:  rgba(0, 0, 0, 0.70);
  }
  
`

export default Home
