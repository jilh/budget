import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Recover from './components/Recover';
import Dashboard from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={ <Signup /> } />
          <Route path="recover" element={ <Recover /> } />
          <Route path="app">
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

