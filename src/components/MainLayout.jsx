import React from 'react';
import Header from './Header';
import Stats from './Stats';
import MobileMockup from './MobileMockup';
import Features from './Features';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="grid-container">
        <Stats />
        <MobileMockup />
        <Features />
      </div>
    </div>
  );
};

export default MainLayout;
