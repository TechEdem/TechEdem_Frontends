import React from 'react'
import styled from 'styled-components'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Linkedin from '../assets/linkedin.png'

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
            <label for='Email'>Email</label>
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
  width: 100%;
  padding: 1% 7%;
}
.form{
  display: flex;
  justify-content: space-between;
  width: 85%;
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
  width: 610px;
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
  background: black;
  width: 100%;
}
`
export default Footer