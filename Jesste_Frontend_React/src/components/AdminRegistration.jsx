import React, {useState} from 'react'
import styled from 'styled-components'
import Background from '../assets/Background.png'
import Logo from '../assets/Ellipse.svg';
import {motion} from 'framer-motion';


function AdminRegistration() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLogin = () => {
        setIsLoading(false);
    };
  return (
    <Container>
    {
        isLoading && (
            <div className='secret_page_main'>
                <div className='secret_page'>
                    <img src={Logo} alt='background'/>
                    <div className='secret'>
                        <div className='secret_key'>
                            <h1>Welcome to the Jesste Administrator Page</h1>
                            <p>Please provide the secret code, to progress to the login or registration page</p>
                            <input type='password' placeholder='Enter Secret Code'/>
                            <br />
                            <button onClick={handleLogin}>Proceed</button>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
        
      {
        !isLoading && (
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
            </div>

      
        )
      }
    </Container>
  )
}
const Container =  styled.div`
.secret_page_main{
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
}
.secret_page{
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.505);
}
.secret_page img{
    padding: 1%;
}
.secret{
    padding: 5% 30%;
}
.secret_key{
    background-color: rgba(255, 255, 255, 0.616);
    height: 40vh;
    border-radius: 20px;   
    text-align: center; 
}
.secret_key h1{
    color: rgb(64, 63, 63);
    font-size: 25px;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
    padding: 2%;
}
.secret_key p{
    padding: 2% 10%;
}
.secret_key input{
    width: 400px;
    height: 60px;
    border-radius: 10px;
    border: 3px solid rgba(154, 154, 154, 0.904);
    text-align: center;
}
.secret_key button{
    background-color: gray;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    padding: 2% 9%;
}
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
    height: 100%;
    background-color: rgba(0, 0, 0, 0.505);
    padding: 27%;
}
.logo{
    width: 300px;
}

`
export default AdminRegistration