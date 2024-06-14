import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const container = ReactDOM.createRoot(document.getElementById('nav-container'));
container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
