import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MTT.css';
import Image from 'react-bootstrap/Image';

function MTT() {
    return (
    <div>
        <h1>Meet The Team</h1>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                <Image src="../imgs/splash.png" className="headshot"/>
                </Col>
                <Col xs={12} md={6}>
                    <div className="mtt-text">Maleha Khan-Avila</div>
                </Col>
            </Row>
        </Container>
    </div>

    )
};

export default MTT;


