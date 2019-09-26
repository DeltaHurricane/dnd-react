import React from 'react';
import './LoginPage.scss';
import Logo from '../components/Logo/Logo';
import LoginForm from '../components/LoginForm/LoginForm';
import AppHeader from '../components/AppHeader/AppHeader';

function LoginPage() {
  return (
    <div className="login__page">
      <AppHeader />
      <Logo />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
