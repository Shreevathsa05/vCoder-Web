import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import VCODE_CLI from './Components/VCODE_CLI';
import SiteSandbox from './Components/SiteSandbox';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cli" element={<VCODE_CLI />} />
          <Route path="/web" element={<SiteSandbox />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
