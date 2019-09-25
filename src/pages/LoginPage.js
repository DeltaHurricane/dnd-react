import React from 'react';
import './LoginPage.scss';
import Logo from '../components/Logo/Logo';
import LoginBox from '../components/LoginBox/LoginBox';
import AppHeader from '../components/AppHeader/AppHeader';

function LoginPage() {
  return (
    <div className="login__page">
      <AppHeader />
      <Logo />
      <LoginBox />
    </div>
  );
}

export default LoginPage;
