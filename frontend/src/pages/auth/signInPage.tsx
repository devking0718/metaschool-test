import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import MainCard from "../../components/card";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMainContext } from "../../context/MainContext";
import { toast } from "react-toastify";

function SignInPage() {
    const { signIn, token } = useMainContext();
    const [userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, []);


    return (
        <div className="SignInPage py-5">
            <Container>
                <Row>
                    <Col sm={12} md={4} className="mx-auto">
                        <MainCard title="Sign In">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" className="rounded-0 " value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" className="rounded-0 " value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => signIn({ userEmail, password })} className="w-100 mt-4 rounded-0 fw-bold text-uppercase">
                                Sign In
                            </Button>
                            <hr />
                            <NavLink to='/signup' className='nav-link text-primary text-center'>Create account</NavLink>
                        </MainCard>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignInPage;