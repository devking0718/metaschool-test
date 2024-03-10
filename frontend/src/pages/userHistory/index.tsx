import { Button, Col, Container, Row, Table } from "react-bootstrap";
import MainCard from "../../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useMainContext } from "../../context/MainContext";
import { useNavigate } from "react-router-dom";
import { UserHistoryProps } from "../../utils/interface";

function UserHistoryPage() {

    const { token, signOut } = useMainContext();
    const [userHistory, setUserhistory] = useState<UserHistoryProps[] | null>(null);
    const navigate = useNavigate();
    const headers = {
        authorization: `${token}`
    }

    const getUserHistory = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/attempt/getAllAttempt`, { headers })
        .then(function (response) {
            console.log("assessments-list", response.data);
            setUserhistory(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        getUserHistory();
    }, [])
    return (
        <div className="UserHistoryPage py-5">
            <Container>
            <Row>
                    <Col sm={12} md={2} className="text-start mb-3 me-auto"><Button className="rounded-0 text-uppercase fw-bold" onClick={() => navigate(-1)}>Back</Button></Col>
                    <Col sm={12} md={2} className="text-end mb-3 ms-auto"><Button className="rounded-0 text-uppercase fw-bold" onClick={() => signOut()}>Sign Out</Button></Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <MainCard title="User History">
                            <Table responsive bordered data-bs-theme="dark">
                                <thead>
                                    <tr>
                                        <th className="text-center">No</th>
                                        <th className="text-center">User Email</th>
                                        <th className="text-center">History Details</th>
                                    </tr>
                                </thead>
                                {userHistory ? (
                                    <tbody>
                                        {userHistory.map((item, index) => (
                                        <tr key={index}>
                                            <th className="fw-light text-center">{item.no}</th>
                                            <th className="fw-light text-center align-middle">{item.userEmail}</th>
                                            <th className="fw-light text-start align-middle">
                                                <Table responsive bordered className="mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center">Assessment</th>
                                                            <th className="text-center">Number of assessments attempted</th>
                                                        </tr>
                                                    </thead>
                                                    {item.attempts.length > 0 ? (
                                                        <tbody>
                                                            {item.attempts.map((attempt, i) => (
                                                                <tr key={i}>
                                                                    <td className="text-center">{attempt.assessmentTitle}</td>
                                                                    <td className="text-center">{attempt.numAttempts}</td>                                                       
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    ) : (
                                                        <tbody>
                                                            <tr><td rowSpan={3}>Empty Data</td></tr>
                                                        </tbody>
                                                    )}
                                                </Table>
                                                <ul>
                                                </ul>
                                            </th>
                                        </tr>
                                        ))}
                                    </tbody>
                                ) : (
                                    <tbody>
                                        <tr><td rowSpan={3}>Empty Data</td></tr>
                                    </tbody>
                                )}
                            </Table>
                        </MainCard>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserHistoryPage;