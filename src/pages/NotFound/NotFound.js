import React from 'react';
import Logo from '../../components/Logo/Logo';
import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="not-found">
      <Logo />
      <p className="not-found__text">404 - Page Not Found</p>
    </div>
  );
}
