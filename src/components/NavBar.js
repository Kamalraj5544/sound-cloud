import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavBar.css'

const NavBar = () => {
  return (
      <div className='nav_bar'>
        <Navbar  variant="light" bg="gray">
        <Container>
          <Navbar.Brand href="#">
            <div className='app-name'>Relevel sound cloud</div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
  )
}

export default NavBar