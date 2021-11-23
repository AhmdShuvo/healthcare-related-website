import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Form, Button, Container } from 'react-bootstrap';
import UseSignUp from '../../../Hooks/UseSignUp';
import { AuthContext } from '../../AuthContext/AuthProvider';

const SignIn = () => {
    const {error, handleRegistration, handleName, handleEmail, handlePassword, toggleHandle, isLogin } = UseSignUp();

    const {googleSignIn,isLoading,setIsLoadng}=useContext(AuthContext);
    const history = useHistory()
    const location = useLocation()

    
  // Google Sign In OPtion //
  const handleGoogleLogin=()=>{
       setIsLoadng(true)
    googleSignIn().then(result=>{
       
        
        history.push(location.state?.from.pathname||"/home")
        console.log(location.state?.from.pathname);
               
    }).finally(()=>setIsLoadng(false))

  }

  const handlePasswordLogin=()=>{

           handleRegistration().then(result=>{
               history.push(location.state?.from)
               console.log(history);
           })
  }

  console.log(isLoading);
    return (
        <div>
            <h1 className="text-center mb-5">Please {isLogin ? "Login" : "Register"}</h1>
            <Container>
                    <Form onSubmit={handlePasswordLogin}>
                        {
                            !isLogin &&
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onBlur={handleName} type="text" placeholder="Your Name" required />
                                <Form.Text className="text-muted">
                                    We'll never share your information with anyone else.
                                </Form.Text>
                            </Form.Group>
                        }


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={toggleHandle} type="checkbox" label="All ready signed in?" />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <Button variant="primary" type="submit">
                            {isLogin ? "Log in" : "Register"}
                        </Button>
                    </Form>
                <div className="mx-auto"> 
                <br />
                 <center><h4>or sign in with Google</h4></center>
                <br />

                   <center> <Button onClick={handleGoogleLogin} className="me-4" title="Google sign in"> <i className="fab fa-google"></i> Google Sign in</Button></center>
                </div>
            </Container>





        </div>
    )
};

export default SignIn;