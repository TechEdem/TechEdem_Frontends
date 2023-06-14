import React from 'react'
import styled from 'styled-components'
import AboutPic from '../assets/AboutPic.png'
import { Fade } from 'react-reveal'
import Typed from 'react-typed'

function AboutIntroPage() {
  return (
    <Container>
        <div className="image">
        <Fade top duration={3000} distance="40px">
            <img src={AboutPic} alt='' />
        </Fade>
            
        </div>
        <div className='description'>
            <Typed strings={["Jesste Engineering",]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
            <p>
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
                Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. 
            </p>
        </div>
    </Container>
  )
}
const Container = styled.div`
display: flex;
.image img{
    padding-left: 30px;
}
.description{
    padding-top: 8%;
}
.typed{
    font-size: 60px;
    font-family: "Kanit";
    color: #5C5B5B;
    font-weight: bold;
}
.description p{
    font-family: "Lato";
    color: #7C7C7A;
    padding: 2% 26% 2% 0%;
    text-align: justify;
    font-size: 14px;
    line-height: 25px;
}
@media(max-width: 760px){
display: block;
.image img{
    padding: left: 10px;
    width: 350px;
    height: 250px;
}
.description h1{
    padding: 10%;
}
.description p{
    padding: 1% 10%;
}
}
`

export default AboutIntroPage