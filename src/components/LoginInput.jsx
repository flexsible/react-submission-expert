import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <div className="input-container">
        <input type="email" value={email} onChange={onEmailChange} placeholder="Email" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
        <button className="login-submit" type="button" onClick={() => login({ email, password })}>Login</button>
      </div>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
