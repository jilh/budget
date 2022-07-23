import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Recover from './components/Recover';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import Settings from './components/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={ <Signup /> } />
          <Route path="recover" element={ <Recover /> } />
          <Route path="app" element={ <App /> }>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={ <Dashboard /> } />
            <Route path="expenses" element={ <Expenses /> } />
            <Route path="settings" element={ <Settings /> } />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

