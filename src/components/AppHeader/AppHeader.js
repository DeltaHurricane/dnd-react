import React from 'react';
import './AppHeader.scss';
import Logo from '../Logo/Logo';
import OnlinePlayers from '../OnlinePlayers/OnlinePlayers';

export default function AppHeader() {
  return (
    <header className="app__header">
      <Logo />
      <OnlinePlayers />
    </header>
  );
}
