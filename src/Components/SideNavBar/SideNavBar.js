import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const SideNavBar = () => {
    const{user,admin}=UseAuth();
    return (
        <div >
            <img
                src="https://i.ibb.co/Lx0633Q/Logo.png"
                width="100"
                height="55"
                className="d-inline-block align-top mt-3"
                alt="Apartment logo"
            />
            {
                admin ?

                    <Nav defaultActiveKey="/home" className="flex-column"  >
                        <Nav.Link ><Link to="/dashboard/myorders">Booking List</Link></Nav.Link>
                        <Nav.Link eventKey="link-1">Add Apartment</Nav.Link>
                        <Nav.Link eventKey="link-2">Add House</Nav.Link>

                    </Nav>
                    :
                    <Nav defaultActiveKey="/home" className="flex-column"  >
                    <Nav.Link ><Link to="/dashboard/myorders">Myorders</Link></Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>

                </Nav>
            }


        </div>
    );
};

export default SideNavBar;