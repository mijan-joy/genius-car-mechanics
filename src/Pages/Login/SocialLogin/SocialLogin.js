import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import facebook from '../../../images/social/Facebook.png';
import github from '../../../images/social/github.png';
import google from '../../../images/social/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement=<div>
            <p className="text-danger">Error: {error.message}</p>
          </div>
      }

      if(user){
          navigate('/home');
      }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{height: '1px'}} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{height: '1px'}} className="bg-primary w-50"></div>
                
            </div>
            {errorElement}
            
                <button
                    onClick={()=> signInWithGoogle()}
                 className="btn btn-outline-dark w-50 d-block mx-auto">
                    <img style={{width: '30px'}} src={google} alt="" /><span className="px-2"> 
                    Sign In Google</span></button>
            
            
                <button className="btn btn-outline-dark w-50 d-block mx-auto mt-2">
                    <img style={{width: '30px'}} src={facebook} alt="" /> 
                    <span className="px-2">Sign In Facebook</span></button>
                <button className="btn btn-outline-dark w-50 d-block mx-auto mt-2">
                    <img style={{width: '30px'}} src={github} alt="" /> 
                    <span className="px-2">Sign In GitHub</span></button>
            
        </div>
    );
};

export default SocialLogin;