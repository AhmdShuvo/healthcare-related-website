import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Homeservice.css'

const HomeService = ({service}) => {
    const{name,price,about,email,phone,picture}=service
    return (
        <div>

          {/* Single service for home */}
            <Col>
      <Card className="card">
        <Card.Img variant="top" src={picture}  width="300px" height="160px"/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {about.slice(0,191)}
               
          </Card.Text>
        <div className="border border-1 p-2">
            <h4>Contact</h4>
            <h6>Email:{email}</h6>
            <h5>Phone: {phone}</h5>
        </div>
        <h5>cost : ${price} </h5>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default HomeService;