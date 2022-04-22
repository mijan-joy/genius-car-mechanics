
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      
      if(loading || sending){
        return <Loading></Loading>
    }

      if(user){
          navigate(from, { replace: true });
      }

      if (error) {
        errorElement=<p className="text-danger text-center">Error: {error?.message}</p>
      }

    const handleSubmit = (event) => { 
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
       
    }
    const navigateRegister = (event) => {
        navigate('/register');
    };

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('email sending reset password');
        }else{
            toast('Please enter your email address');
        }
    }

    return (
        <div className="container w-50 mx-auto mt-5 border p-3">
            <h2 className="text-center text-primary border p-2">Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            {errorElement}
            
            <Button variant="primary w-50 mx-auto d-block" type="login">
                Login
            </Button>
            
            
</Form>

<p className="mt-2 text-center">New to Genius Car? <Link to="/register" className="text-primary text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
<p className="mt-2 text-center">Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
<SocialLogin></SocialLogin>
<ToastContainer />
        </div>
    );
};

export default Login;