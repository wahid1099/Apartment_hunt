import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button,Dropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import {FaUserAlt,MdLogin} from "react-icons/all";
import { AiOutlineLogout } from "react-icons/ai";

const Menu = () => {

    const { user, logout ,admin} = UseAuth();

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
                <Nav.Link ><Link to="/" className="text-decoration-none text-black">Home</Link></Nav.Link>
                <Nav.Link ><Link to="/about" className="text-decoration-none text-black">About</Link></Nav.Link>
                <Nav.Link ><Link to="/" className="text-decoration-none text-black">Services</Link></Nav.Link>
                <Nav.Link ><Link to="/" className="text-decoration-none text-black">Concerns</Link></Nav.Link>
                <Nav.Link ><Link to="/" className="text-decoration-none text-black">Event</Link></Nav.Link>
                <Nav.Link ><Link to="/" className="text-decoration-none text-black">Contact</Link></Nav.Link>


                {user.accessToken ?
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaUserAlt/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {user?.accessToken  &&  <span className="text-primary ms-3"><strong>Hello {user.displayName } </strong> </span>  }

                            {user?.accessToken  &&     <Dropdown.Item as={Link} to="/dashboard">DashBoard</Dropdown.Item>}

                            <Nav.Link href="#deets"  className="text-black" as={Link} to="/logout"><Button variant="danger" onClick={logout}><AiOutlineLogout/> Log Out</Button></Nav.Link>
                        </Dropdown.Menu>

                    </Dropdown> :

                    <Nav.Link ><Button variant="success">
                        <Link to="/login" className="text-decoration-none text-white"><MdLogin/>LogIn</Link></Button>
                    </Nav.Link>

                }







            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;