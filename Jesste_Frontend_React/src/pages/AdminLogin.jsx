import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Loader from '../assets/Ellipse.svg';
import { BarLoader } from 'react-spinners';
import Fade from 'react-reveal';
import AdminRegistration from '../components/AdminRegistration';

function AdminLogin() {

    const [loading, setLoading] = useState();
    useEffect(() =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
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
          <AdminRegistration />
        </Fade>
      

   }  
    </Container>
  )
}

const Container = styled.div`
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

export default AdminLogin
