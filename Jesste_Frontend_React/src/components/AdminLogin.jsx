import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Ellipse.svg'
import {motion} from 'framer-motion';
import Background from '../assets/Background.png'
import { Fade } from 'react-reveal';
import Typed from 'react-typed';

function AdminLogin() {
  return (
    <Container>
       <div className='container_main'>
            <div className='admin_intro'>
                <div className='admin_intro_container'>
                    <motion.img src={Logo} alt='Logo'
                    animate={{rotate:360}} 
                    initial={{scale:1}} 
                    transition={{repeat: 5, duration: 1}}
                    className='logo'
                    />
                </div>
            </div>
            <div className='logins'>
            <Fade top duration={1000} distance="40px">
                <Typed strings={["Login"]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>
            </Fade>
            </div>

        </div>
    </Container>
  )
}

const Container = styled.div`
.container_main{
    display: flex;
}
.admin_intro{
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 50%;
}
.admin_intro_container{
    display: flex;
    position: absolute;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.505);
    width: 50%;
}
.logo{
    width: 300px;
    padding-left: 27%;
}
`
export default AdminLogin
