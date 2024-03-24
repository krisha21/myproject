import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Authentication from './components/Authentication';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
