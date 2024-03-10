import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import MainCard from "../../components/card";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function SignUpPage() {
    const [userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [cPassword, setCPassword] = useState<string>("");

    const navigate = useNavigate();

    const signUp = async () => {
        if (userEmail === "" || password === "" || cPassword == "") {
            toast.error("Please enter user information");
            return;
        }

        if(password !== cPassword) {
            toast.error("Password not match");
            return;
        }

        const body = {
            email: userEmail,
            password: password
        }

        await axios.post(`${process.env.REACT_APP_API_URL}/user/signUp`, body)
            .then(function (response) {
                toast.success(response.data.message);
                navigate('/signin');
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
            });
    }


    return (
        <div className="SignUpPage py-5">
            <Container>
                <Row>
                    <Col sm={12} md={4} className="mx-auto">
                        <MainCard title="Sign Up">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" className="rounded-0 " value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className="rounded-0 " value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" className="rounded-0 " value={cPassword} onChange={(e) => { setCPassword(e.target.value) }} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={signUp}>
                                Sign Up
                            </Button>
                            <hr />
                            <NavLink to='/signin' className='nav-link text-primary text-center'>Back to Login</NavLink>
                        </MainCard>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUpPage;