import React from 'react';
import CreationBody from './CreationBody';
import AppHeader from '../../components/AppHeader';
import './CreationPage.scss';


export default function CreationPage() {
  return (
    <div className="creation">
      <AppHeader />
      <div className="creation__body">
        <CreationBody />
      </div>
    </div>
  );
}
