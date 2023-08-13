import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbars = () => {

const cartState=useSelector(state=> state.cart)
  

  return (
    <>
     <Navbar expand="xl"  style={{backgroundColor:'lightgreen'}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{fontSize:'20px', fontWeight:'bold'}} className="me-auto">
            <Nav.Link to='/' as={Link}>Home</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
            <Nav.Link to='/cart' as={Link}>Cart ({cartState.length}) </Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars