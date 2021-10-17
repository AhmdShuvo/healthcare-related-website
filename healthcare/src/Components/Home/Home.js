import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import image from "../../../src/images/headerimage.png"
import HomeService from './HomeService';
const Home = () => {

    const[services,setServices]=useState([]);
    useEffect(()=>{
  fetch('./Services.json').then(res=>res.json()).then(data=>setServices(data.slice(0,5)));

    })

    return (
        < >
             <section className="text-danger fs-6 p-4" style={{ backgroundImage:`url(${image})` ,backgroundRepeat:'no-repeat' }}>
          <h1>welcome to healthcare Organization</h1>
           <p>Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people. Health care is delivered by health professionals and allied health fields.</p>
       </section>

       <section className="my-4">
           <h1>Our services</h1>
           <div className='container my-4'>
           <Row xs={1} md={3} className="g-4 p-3">
               {
                        services.map(service=><HomeService
                        key={service._id}
                        service={service}
                        ></HomeService>)
               }

             
               </Row>
               <center> <a  className="navbar-brand border p-2 m-2 text-dark" href="/services">See More</a></center>
           </div>

       </section>
        </>
    );
};

export default Home;