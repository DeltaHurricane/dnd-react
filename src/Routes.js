import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';
import Creation from './pages/Creation';
import NotFound from './pages/NotFound';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Creation} />
        <Route path="/login" component={LoginPage} />
        <Route path="/game" component={GamePage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
