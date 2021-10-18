import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Detail = () => {

    const {serviceId}=useParams();
   
    const[service,setService]=useState({});
    useEffect(()=>{

        fetch('../services.json').then(res=>res.json()).then(data=>{

        const matched=data.find(serv=>serviceId===serv.name)
        
        
        setService(matched)
        });
    },[serviceId])

    const {price,name,picture,about}=service;
    return (
        <div className="my-5">
    
            <Card className="container w-50 my-">
    <Card.Img className="" variant="top" src={picture} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
       {about}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Total Price:${price}</small>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Detail;