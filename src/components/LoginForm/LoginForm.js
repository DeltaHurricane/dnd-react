import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './LoginForm.scss';

export default function LoginForm() {
  return (
    <form className="login__form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button name="Login" />
    </form>
  );
}
