import Button from '@restart/ui/esm/Button';
import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { Link,useLocation,useHistory} from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';


const Login = () => {

  const{googleSignIn}=useContext(AuthContext)
  const location=useLocation();
  const histry=useHistory()

  const handleGoogleLogin=()=>{
    googleSignIn().then(result=>{
histry.push(location.state?.from)
    });

  }

  return (
    <div className="container">

<Form className="container">
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

<h3 className="my-5">New User? <Link to="/signup">Create New account</Link> </h3>
  <center><button onClick={handleGoogleLogin}  className="btn btn-info my-5 p-2 border rounded-3">Continue With google</button></center>
    </div>
  );
};

export default Login;