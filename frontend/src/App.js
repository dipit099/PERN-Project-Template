import React from 'react';
import './App.css';
import './fonts.css'; 
import { Routes, Route } from 'react-router-dom'; // No need to import Navigate here

import { AuthProvider } from './config/AuthContext'; 
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home/Home';

function App() { 
  return (
    <AuthProvider> 
      <ScrollToTop />
      <div>
        <Routes>             
         <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
