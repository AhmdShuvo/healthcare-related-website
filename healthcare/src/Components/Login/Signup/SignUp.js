
import { initializeApp } from '@firebase/app';
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword,updateProfile } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, {useState } from 'react';
import { Form } from 'react-bootstrap';
import firebaseconfig from "../../../Firebase/FirebaseConfig"



const app = initializeApp(firebaseconfig);
const auth=getAuth()


const SignUp = () => {

    const [islogin,setIslogin]=useState(false)
    const[name,setName]=useState('')
    const [email,setemail]=useState("");
    const [password,setPassword]=useState('')
    const [user,setuser]=useState({})
    const [error,setError]=useState('')
    

    const getname=e=>{
       setName( e.target.value);
       console.log(e.target.value);
    }
      const getemail=(e)=>{
    
        setemail(e.target.value);
      }
    
      const getPassword=e=>{
        setPassword(e.target.value)
      }
   const setUserName=()=>{
       updateProfile(auth.currentUser,{displayName:name}).then(result=>{})
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
          console.log(user);
         setUserName()
         
        })
       }
      }
const toggle=e=>{
setIslogin(e.target.checked)

}
      const handleLogin=(e)=>{

      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      }
    
     
        return (
            <>

            <center><h3>{islogin? <h3>login Now </h3>:<h3>create a new account</h3>}</h3></center>
               <Form onSubmit={islogin?handleLogin:handleRegister} className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
      {!islogin&&  <Form.Control onChange={getname} type="text" placeholder="Your name" />}
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
        <Form.Check onChange={toggle} type="checkbox" label="Already User" />
      </Form.Group>
      <Button className="btn-warning text-light p-1 fs-4 rounded-3" variant="primary" type="submit">
        { islogin? "login":"signUp"}
      </Button>
    </Form>
    
    
            </>
        );
    };

export default SignUp;