import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Creation from './pages/Creation';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      {/* <Route exact path="/" component={Creation} /> */}
      <Route path="/login" component={LoginPage} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}
