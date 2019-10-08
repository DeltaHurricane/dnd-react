import React from 'react';
import CreationBody from './CreationBody';
import Logo from '../../components/Logo/Logo';
import AppHeader from '../../components/AppHeader/AppHeader';
import './CreationPage.scss';


export default function CreationPage() {
  return (
    <div className="creation">
      <header className="creation__header">
        <Logo />
        <AppHeader />
      </header>
      <div className="creation__body">
        <CreationBody />
      </div>
    </div>
  );
}
