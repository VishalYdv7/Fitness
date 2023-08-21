import React from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';

// Styled component for the button
const StyledButton = styled.div`
  .google-login-button {
    background-color: #4285f4; /* Google blue color */
  }
`;

function GoogleLoginButton({ onSuccess, onFailure }) {
  const responseGoogle = (response) => {
    if (response.error) {
      onFailure(response);
    } else {
      onSuccess(response);
    }
  };

  return (
    <StyledButton className='googleButton'>
      <GoogleLogin
        clientId="894400270243-hrrrbd5utqjrsrm0fd2s1c7vguspdo3g.apps.googleusercontent.com"
        buttonText="Sign In with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className="google-login-button"
      />
    </StyledButton>
  );
}

export default GoogleLoginButton;
