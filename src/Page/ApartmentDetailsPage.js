import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Col, Container, Row, Carousel, Form, FloatingLabel,Button} from "react-bootstrap";
import Menu from "../Components/NavBar/Menu";

const ApartmentDetailsPage = () => {
         const {aparmentId}=useParams();
    const [aparmentdetails,setApartmentDetails]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:7000/apartments/${aparmentId}`)
            .then(res=>res.json())
            .then(data=>setApartmentDetails(data))
    },[])
    console.log(aparmentdetails);
    return (
        <div>
            <Menu></Menu>
            <h2>Apartment details</h2>
            <Container>
                <Row>
                    <Col md={9} sm={12}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid h-25"
                                    src={aparmentdetails.img}
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid h-25"
                                    src={aparmentdetails.img1}
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid h-25"
                                    src={aparmentdetails.img2}
                                    alt="Third slide"
                                />



                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid h-25"
                                    src={aparmentdetails.img3}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                        </Carousel>
                        <div className="mt-4">
                            <h6>Project Screenshot</h6>
                            <img src={aparmentdetails.img2} className="img-fluid w-25"/>
                            <img src={aparmentdetails.img1} className="img-fluid w-25"/>
                            <img src={aparmentdetails.img2} className="img-fluid w-25 "/>
                            <img src={aparmentdetails.img3} className="img-fluid w-25 "/>
                        </div>
<div className="d-flex mt-4">
    <h2 style={{color:'#275A53'}}>{aparmentdetails.name}</h2>
    <h2 className="ms-auto"  style={{color:'#275A53'}}>${aparmentdetails.price}</h2>
</div>
                        <p className="text-start mt-2 text-black-50">
                            {aparmentdetails.location}  {aparmentdetails.AddressArea}
                        </p>

                        <div className="mt-3 text-start">
                            <h2  style={{color:'#275A53'}}>Price Details-</h2>
                            <h5 className="mt-3 text-black-50">
                                Rent/Month: $550 (negotiable)<br/>
                                Service Charge : 8,000/= Tk per month, subject to change<br/>
                                Security Deposit : 3 month’s rent<br/>
                                Flat Release Policy : 3 months earlier notice required
                            </h5>
                        </div>
                        <div>
                        <h2 className="mt-3 text-start"  style={{color:'#275A53'}}>Property Details-</h2>
                            <div className="text-black-50 text-start mt-4">
                                <h5>Address & Area:{aparmentdetails.AddressArea}</h5>
                                <h5>Flat Size:{aparmentdetails.Flatsize}</h5>
                                <h5>Floor:{aparmentdetails.Floor}</h5>
                                <h5>Room Category:{aparmentdetails.roomCategory}</h5>
                                <h5>Facilities:{aparmentdetails.Facilities}</h5>
                            </div>
                        </div>

                    </Col>
                    <Col md={3} sm={12}>
                        <div style={{background:'#F4F4F4'}} className="p-4">
                            <Form>
                                <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                    <Form.Control type="text" placeholder="Enter Phone" />

                                </Form.Group>

                                <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                    <Form.Control type="text" placeholder="Enter Name" />

                                </Form.Group>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                           <Button variant="success" className="mt-2">Request Booking</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ApartmentDetailsPage;