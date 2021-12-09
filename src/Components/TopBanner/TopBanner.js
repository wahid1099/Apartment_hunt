import React from 'react';
import bg from '../../Images/Rectangle 13.png'
import {Form,FormControl,Button} from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const TopBanner = () => {
    const bannerbg={
        background: `url('${bg}')`,
        height:'500px',
        backgroundSize:'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
         backgroundBlendMode: 'darken, luminosity',
         paddingTop:'80px'

    }
    return (
        <div style={bannerbg}>
            <Zoom top>

            <h1 className="text-white pt-5">FIND YOUR HOUSE RENT</h1>

            <Form className="d-flex w-50 mx-auto pt-5">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="success" className="w-25">Find Now</Button>
      </Form>
            </Zoom>
        </div>
    );
};

export default TopBanner;