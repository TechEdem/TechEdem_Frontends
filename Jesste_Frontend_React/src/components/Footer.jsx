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
 ];

 const Nav = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Categories',
    link: '/',
  },
  {
    title: 'Contact',
    link: '/',
  }
 ]

function Footer() {
  return (
    <Container>
      <div className='main_footer'>

        <div className='second_footer'>

            <div className='main_footer_nav'>
            {
              Nav.map((each, index) => (
                <div className='footer_nav' key={index}>
                <a href={each.link}>{each.title}</a>
                </div>
              ))
            }
          </div>

          <div className='main_footer_info'>

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

.second_footer{
  height: 60vh;
}
.main_footer_nav{
  display: flex;
  padding: 0% 0%;
  background: rgba(0, 0, 0, 0.75);
  padding: 2% 12%;
}
.footer_nav{
  padding-left: 15%;
}
.footer_nav a{
  text-decoration: none;
  color: white;
  padding-left: 30%;
  padding-top: 10%;
}
.social_media{
  padding: 2% 5%;
}
.main_footer_info{
  display: flex;
  padding-left: 30%;
  padding-top: 4%;
}
.info{
  display: flex;
  padding: 2%;
}
.info p{
  padding: 1% 3%;
}
.info_second a{
  text-decoration: none;
  color: white;
  padding-left: 30%;
  padding-top: 10%;
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
    height: 40vh;
  }
  .copyright{
    padding: 5% 10%;
  }
  .footer_info{
    padding: 10%;
  }
  .info{
    display: flex;
    padding: 2%;

  }
  .info p{
    padding: 1% 10%;
  }
  
}
`
export default Footer