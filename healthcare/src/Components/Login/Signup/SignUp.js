
import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/UseFirebase';
import { AuthContext } from '../../AuthContext/AuthProvider';



const SignUp = () => {

  const{googleSignIn}=useContext(AuthContext)
  
   
  return (
    <>

   
<Form className="container">

<input className="form-control mt-5" type="text" placeholder="Your Name"/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button className="btn-info px-2 text-light fs-4 rounded-3 " variant="warning" type="submit">
  Login
  </Button>
</Form>
     <div className="container my-5"> <h3>Or</h3>
      <center>  <button className='btn-info' onClick={googleSignIn}>Continue With Google</button></center></div>
    </>
);
      }
    

export default SignUp;