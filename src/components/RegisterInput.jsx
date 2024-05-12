import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <div className="register-container">
        <input type="text" value={name} onChange={onNameChange} placeholder="Name" />
        <input type="email" value={email} onChange={onEmailChange} placeholder="Email" />
        <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
        <button className="register-submit" type="button" onClick={() => register({ name, email, password })}>Register</button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
