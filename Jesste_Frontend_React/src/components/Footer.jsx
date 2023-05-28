import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <div className='main_footer'>

        <div className='first_footer'>
          <h1>Questions</h1>
          <form>
            <div className='form'></div>
          </form>
        </div>

        <div className='second_footer'>
          <h1>Questions</h1>
        </div>

      </div>
    </Container>
  )
}
const Container = styled.div`
padding-top: 5%;

.main_footer{
  display: flex;
  width: 100%;
}
.first_footer{
  background: #FFD39F;
  width: 50%;
}
.first_footer h1{
  padding: 3% 0%;
  text-align: center;
  font-family: 'Rubik';
}
`
export default Footer