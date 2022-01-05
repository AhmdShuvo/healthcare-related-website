import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

const Service = ({service}) => {
  const detailIcon=<FontAwesomeIcon icon={faInfo}/>
      const{name,price,about,email,phone,picture,_id}=service;

      // Dynamic url ///
    const url=`service/${_id}`
    return (
        <div>
            <Col>
      <Card className="p-3">
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

        <center> <Link to ={url}><button className="btn-info p-3 text-light fs-5 container-fluid">Details    {detailIcon} </button></Link></center>
      </Card>
    </Col>
        </div>
    );
};

export default Service;