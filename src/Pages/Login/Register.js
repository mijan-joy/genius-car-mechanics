import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';



const Register = () => {
  const [agree, setAgree]= useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken();
    const navigate = useNavigate();

    const navigateLogin = (event) => {
        navigate('/login');
    }
    if(loading || updating){
      return <Loading></Loading>
  }

  if(token){
    navigate('/home');
  }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

          await createUserWithEmailAndPassword(email, password);
          await updateProfile({ displayName: name });
          toast('Updated profile');
        

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
  <input onClick={() =>setAgree(!agree)} type="checkbox" name="terms" id="terms" className="mt-3" />
  {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} for="terms">I agree to the terms and conditions</label> */}
  <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} for="terms">I agree to the terms and conditions</label>
 <div className="text-center">
 <input 
 disabled={!agree}
 className="btn btn-primary mt-3 d-block mx-auto w-50"  type="submit" 
 value="Register" /> 
 </div>
 </form>
 <p className="mt-2 text-center">Already have an account? <Link to="/login" className="text-primary text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
 <SocialLogin></SocialLogin>
 <ToastContainer></ToastContainer>
</div>
     
      
    
    );
};

export default Register;