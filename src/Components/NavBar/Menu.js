import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
const Menu = () => {
    return (

        <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="#"> 
          
          <img
        src="https://i.ibb.co/Lx0633Q/Logo.png"
        width="100"
        height="55"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-3 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Services</Nav.Link>
              <Nav.Link href="#action2">Concerns</Nav.Link>
              <Nav.Link href="#action2">Event</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <Nav.Link href="#action2"><Button variant="success">Log In</Button></Nav.Link>
            
             
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;