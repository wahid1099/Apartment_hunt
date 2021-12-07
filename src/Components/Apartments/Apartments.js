import React,{useState,useEffect} from 'react';
import { Container,Row,Col,Card ,Button,Spinner} from 'react-bootstrap';
import { FaMapMarkerAlt,FaBed ,FaBath} from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Apartments = () => {
    const[apartments,setApartments]=useState([]);
    const [dataloading,setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:7000/apartments')
        .then(res=>res.json())
        .then(data=>{
            setApartments(data)
            setLoading(false)
        })
    },[]);
 const apartment={
     color: '#16322E',
     marginTop: '50px'
 }
 if(dataloading){
   return (
    <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
   )
 }
    return (
        <div style={apartment}>
            <Container>
                <h5>House Rent</h5>
                <h2 className="pb-4">Discover the latest Rent<br/>
                    available today</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    apartments.map(apartment=>(
                        <Fade left>
                        <Col>
      <Card>
        <Card.Img variant="top" src={apartment.img}/>
        <Card.Body>
          <Card.Title><h4 className="text-start">{apartment.name}</h4></Card.Title>
          <Card.Text className="text-start">
              <h6 className="text-secondary"> <FaMapMarkerAlt/>   {apartment.location}</h6>
       
       

        <div className="d-flex pt-1 text-secondary">
            <h5><FaBed/> 3 Bedrooms</h5>
            <h5 className="ms-auto"><FaBath/> 2 Bathroom</h5>
        </div>
        <br/>
 
        <div className="d-flex">
            <h3><strong>${apartment.price}</strong></h3>
         <Button className="ms-auto" variant="success">View Details</Button>
        </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </Fade>
                    ))

                }
  
    

</Row>
            </Container>
            
        </div>
    );
};

export default Apartments;