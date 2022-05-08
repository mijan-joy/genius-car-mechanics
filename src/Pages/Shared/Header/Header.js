import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'; //

const Header = () => {
  const [user]= useAuthState(auth);

  const handleSingOut =()=>{
    signOut(auth);
  }
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" id="brand">
  <Container>
  <Navbar.Brand id="brand" as={Link} to="/">
  <img src={logo} height={30}
         alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/allproducts">AllProducts</Nav.Link>
      <Nav.Link href="home#experts">Experts</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to ="/about">About</Nav.Link>
      {
        user && <>
           <Nav.Link as={Link} to ="addproduct">Add Item</Nav.Link>
           <Nav.Link as={Link} to ="manage">Manage</Nav.Link>
           <Nav.Link as={Link} to="orders">Orders</Nav.Link>
        </>
      }
      {
        user ?
          <Nav.Link onClick={handleSingOut}>
           <i class="far fa-user"> </i> Sign Out</Nav.Link>
        :
        <Nav.Link as={Link} to ="login">
      <i class="far fa-user"></i> Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  
</>
    );
};

export default Header;