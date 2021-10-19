
import Button from '@restart/ui/esm/Button';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/UseFirebase';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from '@firebase/app';
import firebaseConfig from '../../../Firebase/FirebaseConfig';
import userEvent from '@testing-library/user-event';



const app=initializeApp(firebaseConfig)

const SignUp = () => {

  

  const auth=getAuth()
  const [email,setemail]=useState("");
  const [password,setpassword]=useState('')
  const [name,setName]=useState('')

  const{googleSignIn}=useContext(AuthContext)
  
  const getEmail=e=>{
    setemail(e.target.value)
  } 
  
  const getpassword=e=>{
    setpassword(e.target.value)
  }
  const getName=e=>{
    setName(e.target.value)
  }


  const handleRegister=(e)=>{

    console.log(email,password,name);
e.preventDefault()

createUserWithEmailAndPassword(auth,email,password).then(result=>{
 ;
})


  }
  return (
    <>

   
<Form onSubmit={handleRegister} className="container">

 <input onChange={getName} className="form-control mt-5" type="text" placeholder="Your Name"/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={getEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={getpassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button className="btn-info px-2 text-light fs-4 rounded-3 " variant="warning" type="submit">
 Sign UP
  </Button>
</Form>
     <div className="container my-5"> <h3>Or</h3>
      <center>  <button className='btn-info' onClick={googleSignIn}>Continue With Google</button></center></div>
    </>
);
      }
    

export default SignUp;