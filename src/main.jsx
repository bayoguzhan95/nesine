import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CouponProvider } from './context/CouponContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CouponProvider>
    <App />
  </CouponProvider>
);
