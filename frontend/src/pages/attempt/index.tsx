import { Accordion, Badge, Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import MainCard from "../../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMainContext } from "../../context/MainContext";
import { AssessMentListProps, SectionListItemProps, UserProps, AnswerItemProps } from "../../utils/interface";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AttemptPage() {
    const { token } = useMainContext();
    const [user, setUser] = useState<UserProps | null>(null);
    const [assessment, setAssessment] = useState<AssessMentListProps | null>(null);
    const [sectionList, setSectionList] = useState<SectionListItemProps[] | null>(null);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [showAnswer,setShowAnswer] = useState<boolean>(false);
    const { Id } = useParams();
    const navigate = useNavigate();

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

    const startAttempt = async () => {

        const body = {
            assessmentId: Id,
            userId: user?.userId
        }

        console.log("body", body)
        await axios.post(`${process.env.REACT_APP_API_URL}/attempt/createAttempt`, body, { headers })
            .then(function (response) {
                toast.success(response.data.message);
                setIsStarted(true)
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
            });
    }

    const finishAttempt = async () => {
        navigate(-1)
    }

    useEffect(() => {
        getAssessment();
        getSectionList();
        setUser(JSON.parse(window.localStorage.getItem("user") as any));
    }, []);

    return (
        <div className="AttemptPage">
            <Container>
                <Row>
                    <Col sm={12} md={2} className="text-start mb-3 me-auto"><Button className="rounded-0 text-uppercase fw-bold" onClick={() => navigate(-1)}>Back</Button></Col>
                    <Col sm={12} md={2} className="text-end mb-3 ms-auto"><Button className="rounded-0 text-uppercase fw-bold" onClick={isStarted === false ? startAttempt : finishAttempt}>{isStarted === false ? "Start" : "End"} Attempt</Button></Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <MainCard title="Assessment Details">
                            <Row>
                                <Col sm={12} md={10} className="mb-3">
                                    <div className="text-white fw-bold">Title :</div>
                                    <div className="text-white mb-3">{assessment?.title}</div>
                                    <div className="text-white fw-bold">Description :</div>
                                    <div className="text-white mb-3">{assessment?.description}</div>
                                </Col>
                                <Col sm={12} md={2} className="text-end"><Button className="rounded-0" onClick={() => setShowAnswer(!showAnswer)}>{showAnswer === false ? "Show" : "Hide"}Answer</Button></Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col sm={12} md={12}>
                                    <Accordion defaultActiveKey="0" data-bs-theme="dark">
                                        {sectionList?.map((item, index) => (
                                            <Accordion.Item eventKey={`${index}`} key={index}>
                                                <Accordion.Header>{item.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    {item.questions.length > 0 ? (
                                                        <ListGroup as="ol" numbered>
                                                            {item.questions.map((question, i) => (
                                                                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={i}>
                                                                    <div className="ms-2 me-auto">
                                                                        <div className="fw-bold">{question.text}</div>
                                                                        <ul>
                                                                            {question.answers.map((answer, j) => (
                                                                                <li key={j}>
                                                                                    <Form.Check
                                                                                        inline
                                                                                        label={answer.text}
                                                                                        name="group1"
                                                                                        type={question.type === "MCQ" ? "checkbox" : "radio"}
                                                                                        value={`${answer.isCorrect}`}
                                                                                        id={`inline-${question.type === "MCQ" ? "checkbox" : "radio"}-${i}-${j}`}
                                                                                    />
                                                                                    {showAnswer === true && (
                                                                                        <span>{answer.isCorrect === true ? "🟢" : "🔴"}</span>
                                                                                    )}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="">
                                                                        <span className="me-2">Type: </span>
                                                                        <Badge bg={`${question.type === "MCQ" ? "warning" : "success"}`} pill>
                                                                            {question.type}
                                                                        </Badge>
                                                                    </div>
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
            </Container>
        </div>
    )
}

export default AttemptPage;