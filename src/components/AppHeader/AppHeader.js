import React from 'react';
import './AppHeader.scss';
import Logo from '../Logo';
import OnlinePlayers from '../OnlinePlayers';

export default function AppHeader() {
  return (
    <header className="app__header">
      <Logo />
      <OnlinePlayers />
    </header>
  );
}
