import React, {useEffect, useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Spinner, Table, Modal, Button,Alert} from "react-bootstrap";


const Myorders = () => {
    const [myorders,setOrder]=useState([]);
    const[isLoading,setIsloading]=useState(true);
    const {user}=UseAuth();
    const useremail=user.email;
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDelete = (id) => {

        fetch(`http://localhost:7000/deleteBooking/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setShow(false);
                    setSuccess(true);
                }
            });

    };


    useEffect(()=>{
        fetch(`http://localhost:7000/userbooking?email=${useremail}`)
            .then(res=>res.json())
            .then(data=>{
                setOrder(data)
                    setIsloading(false)

            })

    },[useremail,myorders]);


    if(isLoading){
        return <Spinner animation="border" />;
    }

    return (
        <div>
            <h2>My Orders</h2>
            {success && <Alert variant="success">Booking Cancel successfully!</Alert>}

            <Table striped bordered hover>
                <thead>
                <tr>

                    <th>Order Id</th>
                    <th>Apartment Name</th>
                    <th>Apartment Img</th>
                    <th>Price</th>
                    <th>Comment</th>
                    <th>Phone</th>
                    <th>Adress</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    myorders?.map(orders=>(
                        <tr>
                            <td>{orders._id}</td>
                            <td>{orders.name}</td>
                            <td><img src={orders.img} style={{width:'70px',height:'40px'}}/></td>
                            <td>{orders.price}</td>
                            <td>{orders.comment}</td>
                            <td>{orders.phone}</td>
                            <td>{orders.location}</td>
                            <td><Button variant="danger"  onClick={handleShow}>Cancel Booking


                            </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Delete</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Do you really want to delete?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            No
                                        </Button>
                                        <Button variant="primary" onClick={()=>handleDelete(orders._id)}>
                                            Yes
                                        </Button>
                                    </Modal.Footer>
                                </Modal></td>

                        </tr>




                    ))
                }
                </tbody>


            </Table>


        </div>
    );
};

export default Myorders;