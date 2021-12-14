import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import SideNavBar from "../SideNavBar/SideNavBar";
import {Link, Outlet} from 'react-router-dom';
import UseAuth from "../../Hooks/UseAuth";
const DashboardHome = () => {
    const{user}=UseAuth();
    return (
        <div>
            <Row>
                <Col md={2} className="text-start ps-5">
                    <SideNavBar></SideNavBar>

                </Col>
                <Col md={10} className="ms-auto">

                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand  >DASHBOARD</Navbar.Brand>
                            <Nav.Link><Link to="/">HOME</Link></Nav.Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">


                                <Nav className="ms-auto">
                                    <Nav.Link href="#deets">{user.displayName}</Nav.Link>
                                    <Nav.Link href="#deets">{user.email}</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <h2>Welcome to Dashboard</h2>

                <Outlet></Outlet>
                </Col>
            </Row>

        </div>
    );
};

export default DashboardHome;