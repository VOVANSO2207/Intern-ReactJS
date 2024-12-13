import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Stats from './Stats';
import MobileMockup from './MobileMockup';
import Features from './Features';
import { Button } from 'antd';

const MainLayout = () => {
  const navigate = useNavigate(); 

  return (
    <div className="main-layout">
       <Button
        type="primary"
        className='back-button'
        onClick={() => navigate('/')} 
      >
        Quay lại
      </Button>
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
