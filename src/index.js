import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../src/theme/theme.js";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import Recover from './components/Recover';
import Dashboard from './components/Dashboard';
import Expenses from './components/Expenses';
import Settings from './components/Settings';
import Account from './components/Account';
import Categories from './components/Categories';

if(process.env.NODE_ENV === 'development'){
  const { worker } = require('./mocks/browser')
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate to="/app/dashboard" /> } />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={ <Signup /> } />
            <Route path="recover" element={ <Recover /> } />
            <Route path="app" element={ <App /> }>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={ <Dashboard /> } />
              <Route path="expenses" element={ <Expenses /> } />
              <Route path="settings" element={ <Settings /> }>
                <Route index element={ <Navigate to="/app/settings/account" /> } />
                <Route path="account" element={ <Account /> } />
                <Route path="categories" element={ <Categories /> } />
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

