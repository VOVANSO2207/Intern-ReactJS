
import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout';
import DetailPayment from './components/DetailPayment';

import './i18n/i18n';
// import MainLayoutTask2 from './components/MainLayoutTask2';
function App() {
  return (
    <div className="App">
      <MainLayout />
      <DetailPayment></DetailPayment>
    </div>
    
  );
}

export default App;

