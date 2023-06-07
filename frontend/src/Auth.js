import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const Auth = () => {
  const navigate = useNavigate();

  const responseGoogle = async (response) => {
    try {
      const idToken = response.tokenId;

      // Send the ID token to the backend for verification
      const res = await axios.post('/auth', { idToken });
      const { token } = res.data;

      // Store the token in localStorage or cookies
      localStorage.setItem('token', token);

      // Redirect to the dashboard or desired protected route
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Login with Google</h1>
      {/* <GoogleLogin
        clientId="343284261955-tllri5i81qddnbhtchko5gk9em23h20h.apps.googleusercontent.com"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
    </div>
  );
};

export default Auth;
