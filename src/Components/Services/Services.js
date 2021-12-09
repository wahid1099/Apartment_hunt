import React from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Services = () => {
    const servicestyle={
        color:'#16322E'
    }
    return (
        <div style={servicestyle}>
            <Fade bottom>
            <h5 className="pt-5">Service</h5>
            <h2>We're an agency tailored to all</h2>
<h2>clients' needs that always delivers</h2>
<Container>
<Row xs={1} md={3} className="g-4 pt-5">
 
    <Col>
      <Card className="border-0">
        <Card.Img variant="top" src="https://i.ibb.co/GkFg5yx/apartment-1.png" className="w-25 mx-auto" />
        <Card.Body>
          <Card.Title>Wide Range of Properties</Card.Title>
          <Card.Text>
<p>   With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card className="border-0">
        <Card.Img variant="top" src="https://i.ibb.co/QrJtnqz/affordable-1.png" className="w-25 mx-auto" />
        <Card.Body>
          <Card.Title>Financing Made Easy</Card.Title>
          <Card.Text>
<p>  Our stress-free finance department that can find financial solutions to save you money.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card className="border-0">
        <Card.Img variant="top" src="https://i.ibb.co/vHH20Km/lessee-1.png" className="w-25 mx-auto" />
        <Card.Body>
          <Card.Title>Trusted by Thousands</Card.Title>
          <Card.Text>
<p>  10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

</Row>
</Container>
            </Fade>
        </div>
    );
};

export default Services;