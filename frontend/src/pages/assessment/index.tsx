import { useEffect, useState } from "react";
import { AssessMentListProps, SectionListItemProps, UserProps } from "../../utils/interface";
import MainCard from "../../components/card";
import { Accordion, Badge, Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useMainContext } from "../../context/MainContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AnswerModal, QuestionModal, SectionModal } from "../../components/modal";



function AssessmentPage() {
    const { token } = useMainContext();
    const [user, setUser] = useState<UserProps | null>(null);
    const [assessment, setAssessment] = useState<AssessMentListProps | null>(null);
    const [sectionList, setSectionList] = useState<SectionListItemProps[] | null>(null)
    const { Id } = useParams();
    const [show, setShow] = useState<boolean>(false);
    const [showQModal, setQModal] = useState<boolean>(false);
    const [showAModal, setAModal] = useState<boolean>(false);
    const [sectionId, setSectionId] = useState<number>(0);
    const [questionId, setQuestionId] = useState<number>(0);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleQModalClose = () => setQModal(false);
    const handleQModalShow = () => setQModal(true);
    const handleAModalClose = () => setAModal(false);
    const handleAModalShow = () => setAModal(true);

    

    const headers = {
        authorization: `${token}`
    }

    const getAssessment = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/assessment/getAssessment/${Id}`, { headers })
            .then(function (response) {
                setAssessment(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const getSectionList = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/section/getAllSection/${Id}`, { headers })
            .then(function (response) {
                setSectionList(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getAssessment();
        getSectionList();
        setUser(JSON.parse(window.localStorage.getItem("user") as string));
    }, [show, showAModal, showQModal]);

    return (
        <div className="AssessmentPage py-5">
            <Container>
                <Row>
                    <Col sm={12} md={2} className="text-start mb-3 me-auto"><Button className="rounded-0 text-uppercase fw-bold" onClick={() => navigate(-1)}>Back</Button></Col>
                    <Col sm={12} md={2} className="text-end mb-3 ms-auto"><Button className="rounded-0 text-uppercase fw-bold" onClick={handleShow}>Create section</Button></Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <MainCard title="Assessment Details">
                            <Row>
                                <Col sm={12} md={12} className="mb-3">
                                    <div className="text-white fw-bold">Title :</div>
                                    <div className="text-white mb-3">{assessment?.title}</div>
                                    <div className="text-white fw-bold">Description :</div>
                                    <div className="text-white mb-3">{assessment?.description}</div>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm={12} md={12}>
                                    <Accordion defaultActiveKey="0" data-bs-theme="dark">
                                        {sectionList?.map((item, index) => (
                                            <Accordion.Item eventKey={`${index}`} key={index}>
                                                <Accordion.Header>{item.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    <Row>
                                                        <Col sm={12} md={12} className="text-end mb-2"><Button className="text-uppercase fw-bold rounded-0" onClick={() => { setSectionId(item.id); handleQModalShow() }}>Create Question</Button></Col>
                                                    </Row>
                                                    {item.questions.length > 0 ? (
                                                        <ListGroup as="ol" numbered>
                                                            {item.questions.map((question, i) => (
                                                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={i}>
                                                                    <div className="ms-2 me-auto">
                                                                        <div className="fw-bold">{question.text}</div>
                                                                        <ul>
                                                                        {question.answers.map((answer, j) => (
                                                                            <li key={j}>{answer.text} <span>{answer.isCorrect === true ? "🟢" : "🔴"}</span></li>    
                                                                        ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="">
                                                                        <span className="me-2">Type: </span>
                                                                        <Badge bg={`${question.type === "MCQ" ? "warning" : "success"}`} pill>
                                                                            {question.type}
                                                                        </Badge>
                                                                    </div>
                                                                    <Button className="py-0 ms-2 rounded-0 fw-bold border-0" onClick={() => { setQuestionId(question.id); handleAModalShow() }}>Create answer</Button>
                                                                </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    ) : (
                                                        <ListGroup>
                                                            <ListGroup.Item className="text-center border-0">Empty Question. Please Create New Question</ListGroup.Item>
                                                        </ListGroup>
                                                    )}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </Col>
                            </Row>
                        </MainCard>
                    </Col>
                </Row>
                <SectionModal show={show} handleClose={handleClose} id={parseInt(Id as string)} />
                <QuestionModal show={showQModal} handleClose={handleQModalClose} id={sectionId} />
                <AnswerModal show={showAModal} handleClose={handleAModalClose} id={questionId}/>
            </Container>
        </div>
    )
}

export default AssessmentPage;