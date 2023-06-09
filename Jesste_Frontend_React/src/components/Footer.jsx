import React from 'react'
import styled from 'styled-components'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'
import Location from '../assets/Subtract.png'
import Phone from '../assets/phone.png'
import Mail from '../assets/mail.png'

const socialMedia = [
  {
    id: 1,
    image: Facebook,
  },
  {
    id: 2,
    image: Instagram,
  },
  {
    id: 3,
    image: Linkedin,
  },
  {
    id: 4,
    image: Twitter,
  }
];
 const footerDetails = [
  {
    picture: Location,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    picture: Phone,
    details: '(+233)54-361-9041',
  },
  {
    picture: Mail,
    details: 'jesseocloo1986@gmail.com'
  }
 ]

function Footer() {
  return (
    <Container>
      <div className='main_footer'>

        <div className='first_footer'>
          <h1>Questions</h1>

          <form>

            <div className='form'>
              <div className='footer_details'>
                <label for='Fullname'>Fullname</label>
                <br />
                <input type='text' name='fullname' placeholder='Enter full name' required />
              </div>

              <div className='footer_details'>
                <label for='Email'>Email</label>
                <br />
                <input type='email' name='email' placeholder='Enter Email' required />
              </div>
            </div>

            <div className='footer_details'>
            <label for='Email'>Message</label>
            <br />
            <textarea name="description" placeholder='Type your Message' />
            </div>

            <div className='submission'>
              <button className='submit'>Submit</button>
            </div>

          </form>
 

        </div>

        <div className='second_footer'>

          <div className='social_media_handles'>
            {
              socialMedia.map((each, index)=>(
                <div className='social_media'key={index}>
                  <img src={each.image} alt='handles'/>
                </div>
              ))
            }
          </div>

          <div className='footer_info'>
            {
              footerDetails.map((each, index) => (
                <div className='info' key={index}>
                  <img src={each.picture} alt='handles'/>
                  <p>{each.details}</p>
                </div>
              ))
            }
          </div>
          
        </div>

        

      </div>

      <div className='copyright'>
        <div className='main_copyright'>
            <h3>&copy; Copyright @ 2023, Edem Aheto </h3>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
padding-top: 4%;

.main_footer{
  display: flex;
  width: 100%;
}
.first_footer{
  background: #FFD39F;
  width: 50%;
  height: 60vh;
}
.first_footer h1{
  padding: 3% 0%;
  text-align: center;
  font-family: 'Rubik';
  color: #515050;
}
form{
  padding: 1% 7%;
}
.form{
  display: flex;
  justify-content: space-between;
  padding-buttom: 5%;
}
.footer_details label{
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  color: #928F8F;
}
.footer_details input{
  width: 280px;
  height: 30px;
  padding: 2%;
  border: none;
  border-radius: 5px;
  font-family: "Rubik";
}
.footer_details textarea{
  width: 625px;
  height: 100px;
  padding: 3%;
  border: none;
  border-radius: 5px;
  font-family: "Rubik";
}
.submission{
  padding-top: 2%;
}
.submit{
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-family: "Rubik";
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);
}
.second_footer{
  width: 50%;
  height: 60vh;
}
.social_media_handles{
  display: flex;
  justify-content: space-around;
  padding: 2% 0%;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
}
.footer_info{
  padding: 10% 15%;
}
.info{
  display: flex;
  padding: 2%;
}
.info p{
  padding: 1% 3%;
}
.copyright{
  background: grey;
  padding: 2% 35%;
}
.main_copyright{
  border-top: 5px solid white;
  text-align: center;
  padding: 1% 0%;
  color: white;
  font-family: "Rubik";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}
@media (max-width: 760px){
  .main_footer{
    display: block;
  }
  .first_footer{
    width: 100%;
  }
  .form{
    display: block;
  }
  .footer_details textarea{
    width: 310px;
  }
  .footer_details input{
    width: 310px; 
  }
  .second_footer{
    width: 100%;
    height: 60vh;
  }
  
  
}
`
export default Footer