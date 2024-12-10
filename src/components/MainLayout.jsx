import React from 'react';
import Header from './Header';
import Stats from './Stats';
import MobileMockup from './MobileMockup';
import Features from './Features';
import MainLayoutTask2 from './PaymentTask2';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="grid-container">
        <Stats />
        <MobileMockup />
        <Features />
      </div>
      <MainLayoutTask2></MainLayoutTask2>
    </div>
  );
};

export default MainLayout;
