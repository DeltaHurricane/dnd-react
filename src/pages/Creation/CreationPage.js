import React from 'react';
import Creation from './Creation';
import Logo from '../../components/Logo/Logo';
import AppHeader from '../../components/AppHeader/AppHeader';


export default function CreationPage() {
  return (
    <div className="creation__page">
      <header className="creation__header">
        <Logo />
        <AppHeader />
      </header>
      <div className="creation__body">
        <Creation />
      </div>
    </div>
  );
}
