import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([]);


    useEffect(()=>{

        // Fetch Data //
          fetch('./Services.json').then(res=>res.json()).then(data=>setServices(data));
    },[])
    return (
        <>
            <section className="container mt-5">
                <h3 className="text-dark">Our Services</h3>
            <Row xs={1} md={3} className="g-4 mb-5">
               {
                        services.map(service=><Service
                        key={service._id}
                        service={service}
                        ></Service>)
               }

             
               </Row>
            </section>
        </>
    );
};

export default Services;