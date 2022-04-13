import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = (event) => {
        navigate('/login');
    }
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }

    return (
        <div className="container w-50 mt-4 border p-5">
            <h2  className="text-center text-primary border p-2">Please Register</h2>
<form onSubmit={handleRegister}>
  <FloatingLabel
    controlId="floatingInput"
    label="Name"
    className="mb-3"
  >
    <Form.Control type="text" name="name" placeholder="Your Name" />
  </FloatingLabel>

  <FloatingLabel controlId="floatingInput" label="Email address"    className="mb-3"
  >
    <Form.Control type="email"  name="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" name="password" placeholder="Password" />
  </FloatingLabel>
 <input type="submit" value="Register" className="btn btn-primary mt-3" /> 
 </form>
 <p className="mt-2 text-center">Already have an account? <Link to="/login" className="text-danger text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
</div>
     
      
    
    );
};

export default Register;