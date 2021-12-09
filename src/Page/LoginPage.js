import React,{useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import { SiGoogle } from "react-icons/si";
import {Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Menu from "../Components/NavBar/Menu";
import Footer from "../Components/Footer/Footer";
import UseAuth from "../Hooks/UseAuth";

const LoginPage = () => {
    const [logindata,setLogindata]=useState({});
    const {user, isLoading, autherror, registerUser, loginUser, signInwithGoogle, logout}=UseAuth();
    const location=useLocation();
    const navigate = useNavigate();




    //login

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        console.log(field,value,newLoginData);

        setLogindata(newLoginData);

    }
    const  handleLoginSubmit=(e)=>{
        loginUser(logindata.email,logindata.password,location,navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        signInwithGoogle(location,navigate);
    }

    return (
        <div>
            <Menu></Menu>
            <Container className="mb-5">
                <h2>LOG IN</h2>
                <Form onSubmit={handleLoginSubmit} className="mx-auto">
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <h5 className="text-start"> Email address</h5>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} />

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <h5 className="text-start">Password</h5>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleOnChange} />
                    </Form.Group>

                    <Button variant="success" type="submit" className="w-50">
                        LogIn
                    </Button>
                </Form>
                <Button onClick={handleGoogleSignIn}  variant="danger" className="mt-4 mb-3"><SiGoogle/> Google Sign In</Button>
                <Link to="/register"> <h5>New user? Register Now!</h5></Link>
            </Container>
            <br/><br/>
<Footer></Footer>
        </div>
    );
};

export default LoginPage;