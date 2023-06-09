import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal'
import UserLogin from '../components/UserLogin'

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
  padding: 2% 30%;
}
.login_section{
  width: 100%;
  height: 90vh;
  background-color: white;
  border-radius: 10px;
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
@media (max-width: 760px){
  section{
    padding: 0%;
  }
  .loader{
    top: 30%;
    left: 25%;
  }
  .imageloader{
    width: 200px;
  }
}
`

export default Login
