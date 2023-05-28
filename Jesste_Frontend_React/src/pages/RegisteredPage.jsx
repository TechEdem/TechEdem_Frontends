import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Loader from '../assets/Ellipse.svg';
import { BarLoader } from 'react-spinners';
import Introduction from '../utils/Introduction'
import IntroProfile from '../utils/IntroProfile'
import Projects from '../components/Projects'
import About from '../components/About'
import IntroductionEmail from '../components/IntroductionEmail'
import Fade from 'react-reveal';
import { useNavigate } from 'react-router-dom';

function RegisteredPage() {

  const [loading, setLoading] = useState();

  let navigate = useNavigate()

    useEffect(() =>{
      if(!localStorage.getItem('token')){
        navigate('/login')
    }
    else{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false)
      }, 5000)
    }
        
    }, [])
  
  return (

    <Container>

      {
        loading ?

        <div className='loader'>

        <div className='main_loader'>
        <motion.img src={Loader}
        animate={{rotate:360}} 
        initial={{scale:1}} 
        transition={{repeat: 5, duration: 1}}
        class= "imageloader"
        /> 
        </div>

        <BarLoader 
          color={"#FFD39F"} 
          loading={loading} size={20} 
          className='barloader'
        />
        </div>
      
        :

        <Fade>
            <Introduction />

            <About />

            <IntroProfile />

            <Projects />

            <IntroductionEmail />
        </Fade>
      
      } 

    </Container>
  )
}

const Container = styled.div`
  .introduction {
    width: 100%;
    height: 100vh; 
    display: flex;
  }
  .description{
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color:  rgba(0, 0, 0, 0.70);
  }
  .loader{
    position: absolute;
    top: 25%;
    left: 40%;
  }
  .main_loader{
    margin-bottom: 30%;
  }
  .imageloader{
    width: 300px;
  }
  .barloader{
    position: absolute;
    left: 30%;
  }
  
`

export default RegisteredPage
