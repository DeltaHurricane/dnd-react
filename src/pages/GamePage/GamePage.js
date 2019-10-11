import React from 'react';
import GameBody from './GameBody';
import AppHeader from '../../components/AppHeader/AppHeader';
import './GamePage.scss';

export default function GamePage() {
  return (
    <div className="game">
      <AppHeader />
      <GameBody />
    </div>
  );
}
