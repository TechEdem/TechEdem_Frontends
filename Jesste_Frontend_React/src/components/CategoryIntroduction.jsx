import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Architecture from './Architecture'

function CategoryIntroduction() {
  <Router>
    <Routes>
      <Route path='/architecture' element={<Architecture />} />
    </Routes>
  </Router>
  return (
    <Container>
        <Header head="Categories" />
        <div className='cat-nav'>
          <Link to='/architecture'>Hello</Link>
        </div>
        
    </Container>
  )
}

const Container = styled.div`

`
export default CategoryIntroduction
