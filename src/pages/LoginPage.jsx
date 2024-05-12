import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/auth/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <div className="login-page__hero">
        <img src="../src/assets/hero.jpg" alt="hero" />
      </div>
      <div className="login-page__main">
        <h2>Login to your account</h2>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?

          {' '}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
