
import { initializeApp } from '@firebase/app';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, {useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebaseconfig from "../../../Firebase/FirebaseConfig"



const app = initializeApp(firebaseconfig);
const auth=getAuth()


const SignUp = () => {
    const [email,setemail]=useState("");
    const [password,setPassword]=useState('')
    const [user,setuser]=useState({})
    const [error,setError]=useState('')
    
      const getemail=(e)=>{
    
        setemail(e.target.value);
      }
    
      const getPassword=e=>{
        setPassword(e.target.value)
      }
   
      
    
    
      const handleRegister=e=>{
        e.preventDefault()
    
        if(password.length<6){
          setError('Password must be 6 charecters long')
        }
    
       else if(!user.email){
        createUserWithEmailAndPassword(auth,email,password).then(result=>{
          const user=result.user;
          setuser(user)
         
        })
       }
      }
    
     
        return (
            <>

            <center><h3>create a new account</h3></center>
               <Form onSubmit={handleRegister} className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={getemail} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
    
        {password.length<6? <h5 className="text-danger">{error}</h5>:<h1></h1>}
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={getPassword} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree to the terms and condition" />
      </Form.Group>
      <Button className="btn-warning text-light p-1 fs-4 rounded-3" variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
    
    <div className="container">
                 <center>  <h3>already user? <Link className="navbar-brand text-warning" to="/login">Login Here</Link></h3></center>
    </div>
            </>
        );
    };

export default SignUp;