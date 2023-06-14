import React from 'react'
import styled from 'styled-components'
import Construction from '../assets/Construction.mp4'
import Navbar from './Navbar'
import Location from '../assets/subtract.png'
import Phone from '../assets/phone.png'
import Mail from '../assets/mail.png'
import '../index.css'
import Typed from 'react-typed'

const info = [
    {
        image: Phone,
        title: 'Phone:',
        description: '(+233)54-361-9041',
    },
    {
        image: Mail,
        title: 'Mail:',
        description: 'jesseocloo1986@gmail.com',
    },
    {
        image: Location,
        title: 'Location:',
        description: 'Kofi Nimo, Official Town,Ashaiman, Ghana',
    },

];

function ContactInroduction() {
  return (
    <Container>
        <div className='introduction'>
            <video src ={Construction} autoPlay loop muted/>
            <div className='description'>
                <Navbar />
                    <div className='contact_details'>

                            <Typed strings={["Contact Us",]} typeSpeed = {80} backSpeed={80} loop  className='typed'/>

                        <div className='main_info'>

                            <div className='main_contact_info'>
                                {
                                    info.map((each, index)=>(
                                        <div className='contact_info' key={index}>
                                            <img src={each.image} alt= 'logo' />
                                            <h4>{each.title}</h4>
                                            <p>{each.description}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <form>
                                <div className='input_box' >
                                    <div className='main_input'>
                                        <input type='fullname' name='fullname' placeholder= 'Enter your fullname' className='input'/>
                                    </div>
                                    <br />
                                    <div className='main_input'>
                                        <input type='email' name='email' placeholder= 'Enter your email' className='input'/>
                                    </div>
                                    <br />
                                    <div className='main_input'>
                                        <textarea placeholder= 'Enter your message' className='textarea' />
                                    </div>
                                    <div className='main_inpu'>
                                        <button>Submit</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                </div>
            </div>
            
        </div>
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
    height: 100%;
    background-color:  rgba(0, 0, 0, 0.64);
  }
  .typed{
    text-align: center;
    font-size: 70px;
    font-family: 'Kanit';
    padding-left: 40%;
    color: #FFE6C8;
  }
  .main_info{
    display: flex;
    padding: 2% 5%;
    weight: 100%;
  }
  .main_contact_info{
    border: 3px solid white;
    padding: 2% 5%;
    width: 33%;
    border-radius: 20px;
    background: rgba(89, 89, 89, 0.71);
  }
  .contact_info{
    display: flex;
    color: white;
    padding: 6% 10%;
  }
  .contact_info h4{
    padding-top: 0.5%;
    padding-left: 2%;
  }
  .contact_info p{
    padding-top: 0.5%;
    padding-left: 4%;
  }
  form{
    padding: 0% 10%;
  }
  .input{
    width: 500px;
    padding: 3%;
    border: none;
    border-radius: 10px;
    outline: none;
    height: 4vh;
  }
  .textarea{
    width: 500px;
    padding: 3%;
    border: none;
    border-radius: 10px;
    resize: none;
    outline: none;
    height: 15vh;
  }
  button{
    width: 300px;
    height: 8vh;
    border-radius: 10px;
    border: 2px solid white;
    font-family: 'Kanit';
    font-size: 20px;
    background: transparent;
    color: white;
  }
  @media (max-width: 900px){
    .introduction{
      height: 105vh;
    }
    .description{
      width: 100.50%;
      height: 105vh;
    }
  }
`
export default ContactInroduction