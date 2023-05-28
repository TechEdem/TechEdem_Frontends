import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../assets/Ellipse.svg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Cancel from '../assets/cancel.png';
import Login from '../pages/Login';
import Fade from 'react-reveal'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => {
    return setClick(true);
  };
  const handleLeaveClick = () => {
    setClick(false);
  };
  

  return (
    <Container>

        <div className="logo">
            <motion.img src={Logo} alt='Logo'
            animate={{rotate:360}} 
            initial={{scale:1}} 
            transition={{repeat: 1, duration: 1}}
            />
        </div>
        

        <nav>
            <ul>
                <li><Link to= '' className='navigation'>Home</Link></li>
                <li><Link to= '' className='navigation'>About</Link></li>
                <li onMouseLeave={handleLeave}>
                    <li onMouseEnter={handleHover}><Link to= '' className='navigation'>Categories</Link></li>
                    {isOpen && (
                      <Fade top duration={1000} distance="40px">
                      <div className="main-menu">
                        <li><Link to= '/login' className='navigation'>Architecture</Link></li>
                        <li><Link to= '' className='navigation'>Construction</Link></li>
                        <li><Link to= '' className='navigation'>Survey</Link></li>
                        <li><Link to= '' className='navigation'>Civil Engineering</Link></li>
                        <li><Link to= '' className='navigation'>Land Sales</Link></li>
                      </div>
                      </Fade>
                    )}
                </li>
                <li><Link to= '' className='navigation'>Contact</Link></li>    
            </ul>
        </nav>

        <div className='authentication'>

          <div className='main_auth'>
            <button className='join' onClick={handleClick}>Join</button>
            {click && (
                <div className='join_main'>
                  <div className='join_menu'>
                    <img src={Cancel} alt='' onClick={handleLeaveClick}/>
                    <Login />
                  </div>
                  
                </div>
                
              )}
          </div>

        </div>

    </Container>
  )
}

const Container = styled.div`

  display: flex;
  justify-content: space-around;

  .logo{
    padding: 1%;
    width: 50%
  }
  
  img{
    width: 80px;
    height: 80px;
  }
  nav{
    padding-right: 28%;
    width: 50%;
  }
  nav ul{
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  nav ul li{
    line-height: 37px;
    color: #FFFFFF;
    text-decoration: none;
  }
  nav ul li: hover{
    color: #FFD39F;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  .navigation{
    font-family: kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 37px;
    color: #FFFFFF;
    text-decoration: none;
  }
  .navigation: hover{
    color: #FFD39F;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  .main-menu {
    display: block;
    position: absolute;
    top: 100%;
    width: 180px;
    height: 200px;
    border: 1px solid white;
    color: white;
    padding-left: 30%;
    background: rgba(82, 82, 82, 0.74);
    border-radius: 0px 20px 20px 20px;
  }
  .authentication{
    display:flex;
    padding: 2% 0%;
    width: 16%;
  }
  .main_auth{
    width: 100%;
  }
  .join{
    width: 100px;
    height: 40px;
    border-radius: 10px;
    border: 3px solid white;
    font-size: 17px;
    background: transparent;
    color: white;
    font-weight: bold;
  }
  .join:hover{
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background: white;
    color: black;
    cursor: pointer;
    font-weight: bold;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
  .join_menu{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background: rgba(82, 82, 82, 0.95);
  }
  
  .join_menu img{
    width: 50px;
    height: 50px;
    float: right;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
  }
  

`

export default Navbar
