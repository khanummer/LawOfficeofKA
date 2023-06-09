import React, { Component } from 'react';
import './Services.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function Services() {
  return (
    <div>
      <h1>Services</h1>
      <Container className="services">
        <Row xs={1} md={2} lg={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../imgs/splash.png" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;

