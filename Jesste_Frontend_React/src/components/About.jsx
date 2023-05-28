import React from 'react'
import styled from 'styled-components'
import {Slide, Fade}  from 'react-reveal'
import AboutImage from '../assets/About_Image.png'
import Typed from 'react-typed'

function About() {
  return (
    <Container>
        <div className='about'>

        <Slide top duration={1000} distance="40px">
        
            <img src={AboutImage} alt='about'/>
        
        </Slide>

        <Fade right duration={1000} distance="40px">
        <div className= 'details'>
          <div className="typed">
            <Typed strings={["About Us"]} typeSpeed = {80} backSpeed={80} loop />
          </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fug
            </p>
            <button>Learn More</button>
        </div>
        </Fade>
        
        </div>
    </Container>
  )
}

const Container = styled.div`

.about{
    display:flex;
    padding: 13%;
  }
  .details{
    padding: 2% 5%;
  }
  .typed{
    font-size: 2.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #FFD39F;
  }
  .details p{
    text-align: justify;
    padding: 5% 0%;
    font-size: 17px;
  }
  .details button{
    width: 250px;
    height: 50px;
    background: rgba(171, 169, 164, 0.31);
    border-radius: 10px;
    border: none;
    font-weight: regular;
  }
  .details button: hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
  }
`
export default About
