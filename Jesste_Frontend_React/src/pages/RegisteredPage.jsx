import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Loader from '../assets/Ellipse.svg';
import { BarLoader } from 'react-spinners';
import Introduction from '../utils/Introduction'
import IntroProfile from '../components/IntroProfile'
import Projects from '../components/Projects'
import About from '../components/IntroductionAbout'
import IntroductionEmail from '../components/IntroductionEmail'
import Fade from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import Testimonies from '../components/Testimonies';
import Questions from '../components/Questions';
import Location from '../components/Location'
import Footer from '../components/Footer';

function RegisteredPage() {

  const [loading, setLoading] = useState();

  let navigate = useNavigate()

    useEffect(() =>{
      if(!localStorage.getItem('token')){
        navigate('/')
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

            <Testimonies />

            <Questions />

            <Location />

            <Footer />
            
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
  @media (max-width: 760px){
    .loader{
      top: 30%;
      left: 25%;
    }
    .imageloader{
      width: 200px;
    }
  }
  
`

export default RegisteredPage
