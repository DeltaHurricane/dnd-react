import React from 'react';
import PropTypes from 'prop-types';
import './LoginPage.scss';
import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage({ history }) {
  return (
    <div className="login__page">
      <Logo />
      <LoginForm history={history} />
    </div>
  );
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
};
