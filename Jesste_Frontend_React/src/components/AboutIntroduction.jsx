import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import AboutIntroPage from './AboutIntroPage'
import AboutVision from './AboutVision'
import AboutMission from './AboutMission'
import AboutYears from './AboutYears'
import AboutTeam from './AboutTeam'
import AboutMedia from './AboutMedia'
import Footer from './Footer'

function AboutIntroduction() {
  return (
    <Container>
        <div className='about_info'>
            <Navbar />
            <AboutIntroPage />
        </div>
        <AboutVision />

        <AboutMission />

        <AboutYears />

        <AboutTeam />

        <AboutMedia />

        <Footer />
        
    </Container>
  )
}

const Container = styled.div`
    .about_info{
        background: linear-gradient(276.42deg, #F8E1A9 11.65%, rgba(253, 213, 110, 0.02) 100.91%);
        width: 100%;
        height: 100vh;
    }
    @media (max-width: 768px) {
      .about_info{
        height: 100vh;
      }
    }
`
export default AboutIntroduction