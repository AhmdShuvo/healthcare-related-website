import { initializeApp } from '@firebase/app';
import { getAuth,signInWithEmailAndPassword, updateProfile } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link,useLocation,useHistory} from 'react-router-dom';
import firebaseConfig from '../../Firebase/FirebaseConfig';
import { AuthContext } from '../AuthContext/AuthProvider';

const app=initializeApp(firebaseConfig)
const auth=getAuth()
const Login = () => {


  // USe History ///
 const history=useHistory()


//  Multiple usestates //
  const[name,setname]=useState('');
const [email,setemail]=useState("");
const [password,setPassword]=useState('');
  const{googleSignIn}=useContext(AuthContext)

  // Use location //
  const location=useLocation();
  // histoy hook /
  const histry=useHistory()


  // Google Sign In OPtion //
  const handleGoogleLogin=()=>{
    googleSignIn().then(result=>{
histry.push(location.state?.from)
    });

  }


  // NAME from Input //
  const getname=e=>{
    setname(e.target.value);
  }
  
  // Update user Name //
  const updateUserName=()=>{
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });

  }

  // eail adress from Input //
  const getEmail=e=>{
    setemail(e.target.value)
  }
  // password from Inut ///
  const getpassword=e=>{
    setPassword(e.target.value)
  }


  // Login Function //
  const handleLogin=e=>{
    e.preventDefault()

console.log(email,password);

signInWithEmailAndPassword(auth,email,password).then(result=>{

  const user=result.user;
  updateUserName()
})

      
  }
  return (
    <div className="container">

<Form onSubmit={handleLogin} className="container">

<input onChange={getname} className="form-control mt-5" type="text" placeholder="Your Name"/>
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
  Login
  </Button>
</Form>

<h3 className="my-5">New User? <Link to="/signup">Create New account</Link> </h3>
  <center><button onClick={handleGoogleLogin}  className="btn btn-info my-5 p-2 border rounded-3">Continue With google</button></center>
    </div>
  );
};

export default Login;