
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderBg from '../../assets/images/header-bg.svg';

const Header = () => {
    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" style={{ backgroundImage: `url(${HeaderBg})`, backgroundPosition: 'center' }}>
            <Container>
                <Nav className="mx-auto">
                    <Navbar.Brand className="fw-bold fs-3 mb-4 text-white text-uppercase">Assessment System</Navbar.Brand>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default Header;