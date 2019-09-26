import React from 'react';
import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';
import AppHeader from '../../components/AppHeader/AppHeader';

export default function Creation() {
  return (
    <div className="login__page">
      <AppHeader />
      <Logo />
      <LoginForm />
    </div>
  );
}
