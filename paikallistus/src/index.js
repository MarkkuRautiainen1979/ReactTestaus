import React from 'react';
import ReactDOM from 'react-dom/client';
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

