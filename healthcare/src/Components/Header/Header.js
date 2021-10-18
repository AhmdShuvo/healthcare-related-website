import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Header = () => {

  const {user,userSignOut}=useFirebase()

    return (
     
          
            
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/home">Health Care Limited</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="navbar-brand border border-info p-2 m-2" to="/home">Home</NavLink>
      <NavLink className="navbar-brand border border-info p-2 m-2" to="/services">Services</NavLink>
      {!user.email?<NavLink className="navbar-brand border border-info p-2 m-2" to="/login">Log in</NavLink>:<NavLink onClick={userSignOut} className="navbar-brand border border-info p-2 m-2" to="home">Sign Out</NavLink>}
    </Nav>
    <h1>{user.displayName}</h1>
  </Navbar.Collapse>
  </Container>
</Navbar>


     
          
      
    );
};

export default Header;