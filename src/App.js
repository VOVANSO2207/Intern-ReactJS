import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DetailPayment from './components/DetailPayment';
import { Button } from 'antd';
import './i18n/i18n';
import PaymentTask2 from './components/PaymentTask2';
import LanguageSwitcher from './components/LanguageSwitcher';


function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '20px' }}>
      <Button type="primary" onClick={() => navigate('/test-number-1')}>
        Test number 1
      </Button>
      <Button type="primary" onClick={() => navigate('/test-number-2')} style={{ marginLeft: '10px' }}>
      Test number 2
      </Button>
      <Button type="primary" onClick={() => navigate('/test-number-3')} style={{ marginLeft: '10px' }}>
      Test number 3 
      </Button>
      <LanguageSwitcher />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test-number-1" element={<MainLayout />} />
          <Route path="/test-number-2" element={<PaymentTask2 />} />
          <Route path="/test-number-3" element={<DetailPayment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
