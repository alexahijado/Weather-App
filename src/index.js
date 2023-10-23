import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You may have a stylesheet for your app
import App from './App';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
