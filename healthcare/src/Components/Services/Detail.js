import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Detail = () => {


      // GEt Service id using parameters //
    const {serviceId}=useParams();
    console.log(serviceId);
   
    const[service,setService]=useState({});
    useEffect(()=>{



      //  Fetch data ///
        fetch('../Services.json').then(res=>res.json()).then(data=>{


          // CHeck for matched data //
        const matched=data.find(serv=>serviceId===serv._id)
        
        
        setService(matched)
        });
    },[serviceId])
    console.log(service);
               
            if(!service){
              return "loaing"
            }

            console.log(service);
    // DEstructure from mathced data ///
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