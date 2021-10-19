
import Button from '@restart/ui/esm/Button';
import React, { createContext, useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/UseFirebase';
import { AuthContext } from '../../AuthContext/AuthProvider';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { initializeApp } from '@firebase/app';
import firebaseConfig from '../../../Firebase/FirebaseConfig';
import userEvent from '@testing-library/user-event';
      

        // Firebase App Initialize //
const app=initializeApp(firebaseConfig)

const SignUp = () => {

  
   
  const auth=getAuth()
  // multiple use states //
  const [email,setemail]=useState("");
  const [password,setpassword]=useState('')
  const [name,setName]=useState('')

  // destructuring from context /
  const{googleSignIn}=useContext(AuthContext)
  
  // GEt Email adress From input //
  const getEmail=e=>{
    setemail(e.target.value)
  } 
  
  // Get pasword frpm Input //
  const getpassword=e=>{
    setpassword(e.target.value)
  }

  // GEt Name used from input //
  const getName=e=>{
    setName(e.target.value)
  }

 

  // Registration with password //
  const handleRegister=(e)=>{

    console.log(email,password,name);
e.preventDefault()

createUserWithEmailAndPassword(auth,email,password).then(result=>{
 ;
})


  }
  return (
    <>
  
  {/* FOrm  */}
   
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

     {/* Google LOgin OPtion */}
      <center>  <button className='btn-info' onClick={googleSignIn}>Continue With Google</button></center></div>
    </>
);
      }
    

export default SignUp;