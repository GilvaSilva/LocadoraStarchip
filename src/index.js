import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App'; // Importe o App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* O <Router> já está dentro do App.js */}
  </React.StrictMode>
);