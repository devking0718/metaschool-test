import React, { useContext, useEffect, useState } from "react";
import MainCard from "../components/card";
import { Container, Row, Col, Dropdown, Button, ListGroup } from "react-bootstrap";
import { NavLink, Navigate } from "react-router-dom";
import { useMainContext } from "../context/MainContext";
import axios from "axios";
import { AssessmentModal } from "../components/modal";
import { AssessMentListProps, UserProps } from "../utils/interface";

function HomePage() {

    const { token, signOut } = useMainContext();
    const [assessmentList, setAssessmentList] = useState<AssessMentListProps[] | null>(null);
    const [show, setShow] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps | null>(null);

    const headers = {
        authorization: `${token}`
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getAssessmentList = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/assessment/getAllAssessment`, { headers })
            .then(function (response) {
                console.log("assessments-list", response.data);
                setAssessmentList(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        setUser(JSON.parse(window.localStorage.getItem("user") as string));
        getAssessmentList();
    }, [])

    useEffect(() => {
        getAssessmentList();
    }, [show])


    return (
        <div className="HomePage py-5">
            <Container>
                <Row>
                    {user?.role === "admin" && (
                        <Col sm={12} md={2} className="me-auto mb-5 text-start">
                            <NavLink to="/history" className="nav-link bg-success btn text-white fw-bold text-uppercase py-2 rounded-0">User History</NavLink>
                        </Col>
                    )}

                    <Col sm={12} md={2} className="ms-auto mb-5 text-end">
                        <Button className="rounded-0 fw-bold text-uppercase" onClick={() => signOut()}>Sign Out</Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <MainCard title="Assessment List">
                            {user?.role === "admin" && (
                                <Row>
                                    <Col sm={12} md={2} className="mb-3 text-end ms-auto">
                                        <Button className="rounded-0 fw-bold text-uppercase" onClick={handleShow}>Create Assessment</Button>
                                    </Col>
                                </Row>
                            )}
                            {assessmentList ? (
                                <ListGroup className="rounded-0 bg-transparent-1">
                                    {assessmentList.map((item, index) => (
                                        <ListGroup.Item className="bg-transparent-1 text-white d-flex align-items-center justify-content-between" key={index}><div className="text-uppercase">{item.title}</div><div>{user?.role === "admin" && (<NavLink to={`/assessment/${item.id}`}><Button className="ms-2 rounded-0 fw-bold">Create Question</Button></NavLink>)}{user?.role === "user" && (<NavLink to={`/attempt/${item.id}`}><Button className="ms-2 rounded-0 fw-bold">Attemp</Button></NavLink>)}</div></ListGroup.Item>
                                    ))}
                                </ListGroup>
                            ) : (
                                <ListGroup className="rounded-0 bg-transparent-1">
                                    <ListGroup.Item className="bg-transparent-1 text-white"><div className="text-uppercase text-center">Empty Assessment List</div></ListGroup.Item>
                                </ListGroup>
                            )}
                        </MainCard>
                    </Col>
                </Row>
            </Container>
            <AssessmentModal show={show} handleClose={handleClose} />
        </div>
    )
}

export default HomePage;