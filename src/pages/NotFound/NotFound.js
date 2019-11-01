import React from 'react';
import Logo from '../../components/Logo/Logo';
import './NotFound.scss';

export default function NotFound() {
  testando();
  return (
    <div className="not-found">
      <Logo />
      <p className="not-found__text">404 - Page Not Found</p>
    </div>
  );
}

function testando() {
  fetch('http://localhost:5000/games')
    .then((teste) => teste.json())
    .then((result) => console.log(result));
}
