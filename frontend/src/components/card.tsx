import { ReactNode } from "react";
import { Card, Image } from "react-bootstrap";
import HeaderIcon from '../assets/images/subject-icon.svg';

const MainCard = ({children, title} : {children: ReactNode, title: string}) => {
    return (
        <Card className="MainCard rounded-0 bg-transparent text-white">
            <Card.Header className="d-flex align-items-center fw-bold fs-5 justify-content-between text-white text-uppercase rounded-0"><div className="d-flex align-items-center"><Image src={HeaderIcon} width={15} alt="icon" className="me-2"/><span>{title}</span></div></Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    );
}

export default MainCard;
