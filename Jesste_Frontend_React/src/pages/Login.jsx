import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import UserLogin from '../components/UserRegistration'

function Login() {
  return (
    <Container>
    
        <section>
          <Fade bottom duration={1000} distance="40px">
              <div className='login_section'>
                  <UserLogin />
              </div>
          </Fade>
        </section>

    </Container>
  )
}

const Container = styled.div`
section{ 
  padding: 2.5% 30%;
}
.login_section{
  width: 100%;
  height: 90vh;
  background-color: white;
  border-radius: 10px;
}
`

export default Login
