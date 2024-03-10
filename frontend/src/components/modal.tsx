import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import HeaderIcon from '../assets/images/subject-icon.svg';
import { toast } from "react-toastify";
import axios from "axios";
import { useMainContext } from "../context/MainContext";

export const AssessmentModal = ({ show, handleClose }: { show: boolean, handleClose: () => void }) => {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const { token } = useMainContext();

    const headers = {
        authorization: `${token}`
    }

    const createAssessment = async () => {

        if (title === "" || description === "") {
            toast.error("Please enter assessment information");;
            return;
        }

        const body = {
            title: title,
            description: description
        }

        await axios.post(`${process.env.REACT_APP_API_URL}/assessment/createAssessment`, body, { headers })
            .then(function (response) {
                toast.success(response.data.message);
                handleClose();
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
            });
    }

    useEffect(() => {
        setTitle("");
        setDescription("");
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-white fs-5 text-uppercase"><div className="d-flex align-items-center"><Image src={HeaderIcon} width={15} alt="icon" className="me-2" /><span>Create Assessment</span></div></Modal.Title>
            </Modal.Header>
            <Modal.Body className="rounded-0">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Assessment Title</Form.Label>
                    <Form.Control type="text" className="rounded-0 " value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Assessment Description</Form.Label>
                    <Form.Control type="text" className="rounded-0 " as="textarea" rows={3} value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </Form.Group>
                <Row>
                    <Col sm={6} md={6}>
                        <Button variant="primary" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={createAssessment}>
                            Create
                        </Button>
                    </Col>
                    <Col sm={6} md={6}>
                        <Button variant="danger" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export const SectionModal = ({ show, handleClose, id }: { show: boolean, handleClose: () => void, id: number }) => {

    const [title, setTitle] = useState<string>("");
    const { token } = useMainContext();

    const headers = {
        authorization: `${token}`
    }

    const createSection = async () => {

        if (title === "") {
            toast.error("Please enter assessment information");;
            return;
        }

        const body = {
            title: title,
            assessmentId: id
        }

        await axios.post(`${process.env.REACT_APP_API_URL}/section/createSection`, body, { headers })
            .then(function (response) {
                toast.success(response.data.message);
                handleClose();
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
            });
    }

    useEffect(() => {
        setTitle("");
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-white fs-5 text-uppercase"><div className="d-flex align-items-center"><Image src={HeaderIcon} width={15} alt="icon" className="me-2" /><span>Create Section</span></div></Modal.Title>
            </Modal.Header>
            <Modal.Body className="rounded-0">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Section Title</Form.Label>
                    <Form.Control type="text" className="rounded-0 " value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </Form.Group>
                <Row>
                    <Col sm={6} md={6}>
                        <Button variant="primary" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={createSection}>
                            Create
                        </Button>
                    </Col>
                    <Col sm={6} md={6}>
                        <Button variant="danger" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export const QuestionModal = ({ show, handleClose, id }: { show: boolean, handleClose: () => void, id: number }) => {

    const [question, setQuestion] = useState<string>("");
    const [questionType, setQuestionType] = useState<string>("MCQ");
    const { token } = useMainContext();

    const headers = {
        authorization: `${token}`
    }

    const createSection = async () => {

        if (question === "") {
            toast.error("Please enter assessment information");;
            return;
        }

        const body = {
            text: question,
            sectionId: id,
            type: questionType
        }

        await axios.post(`${process.env.REACT_APP_API_URL}/question/createQuestion`, body, { headers })
            .then(function (response) {
                toast.success(response.data.message);
                handleClose();
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
            });
    }

    useEffect(() => {
        setQuestion("");
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-white fs-5 text-uppercase"><div className="d-flex align-items-center"><Image src={HeaderIcon} width={15} alt="icon" className="me-2" /><span>Create Question</span></div></Modal.Title>
            </Modal.Header>
            <Modal.Body className="rounded-0">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Question Text</Form.Label>
                    <Form.Control type="text" className="rounded-0 " value={question} onChange={(e) => { setQuestion(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Select Question Type</Form.Label><br />
                    <Form.Check
                        inline
                        label="MCQ"
                        name="group1"
                        type="radio"
                        id="inline-radio-1"
                        value="MCQ"
                        checked={questionType === 'MCQ'}
                        onChange={(e) => setQuestionType(e.target.value)}
                    />
                    <Form.Check
                        inline
                        label="MSQ"
                        name="group1"
                        type="radio"
                        id="inline-radio-2"
                        value="MSQ"
                        checked={questionType === 'MSQ'}
                        onChange={(e) => setQuestionType(e.target.value)}
                    />
                </Form.Group>
                <Row>
                    <Col sm={6} md={6}>
                        <Button variant="primary" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={createSection}>
                            Create
                        </Button>
                    </Col>
                    <Col sm={6} md={6}>
                        <Button variant="danger" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}

export const AnswerModal = ({ show, handleClose, id }: { show: boolean, handleClose: () => void, id: number }) => {

    const [answer, setAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const { token } = useMainContext();

    const headers = {
        authorization: `${token}`
    }

    const createAnswer = async () => {

        if (answer === "") {
            toast.error("Please enter assessment information");;
            return;
        }

        const body = {
            text: answer,
            questionId: id,
            isCorrect: isCorrect
        }

        await axios.post(`${process.env.REACT_APP_API_URL}/answer/createAnswer`, body, { headers })
            .then(function (response) {
                toast.success(response.data.message);
                handleClose();
            })
            .catch(function (error) {
                toast.error(error.response.data.message);
            });
    }

    useEffect(() => {
        setAnswer("");
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-white fs-5 text-uppercase"><div className="d-flex align-items-center"><Image src={HeaderIcon} width={15} alt="icon" className="me-2" /><span>Create Answer</span></div></Modal.Title>
            </Modal.Header>
            <Modal.Body className="rounded-0">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Answer Text</Form.Label>
                    <Form.Control type="text" className="rounded-0 " value={answer} onChange={(e) => { setAnswer(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correct?</Form.Label><br />
                    <Form.Check
                        inline
                        label="Yes"
                        name="group1"
                        type="radio"
                        id="inline-radio-1"
                        value="true"
                        checked={isCorrect === true}
                        onChange={() => setIsCorrect(true)}
                    />
                    <Form.Check
                        inline
                        label="No"
                        name="group1"
                        type="radio"
                        id="inline-radio-2"
                        value="false"
                        checked={isCorrect === false}
                        onChange={() => setIsCorrect(false)}
                    />
                </Form.Group>
                <Row>
                    <Col sm={6} md={6}>
                        <Button variant="primary" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={createAnswer}>
                            Create
                        </Button>
                    </Col>
                    <Col sm={6} md={6}>
                        <Button variant="danger" type="submit" className="w-100 mt-4 rounded-0 fw-bold text-uppercase" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}