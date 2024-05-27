import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './styled/LoginButton';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <div className="input-container">
        <input type="email" value={email} onChange={onEmailChange} placeholder="Email" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
        <Button type="submit" onClick={(e) => {
          e.preventDefault();
          login({ email, password })
        }}>Login</Button>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
