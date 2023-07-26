import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css'; // Import the fonts.css file
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './AppContext'; // Import the context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider> {/* Wrap your application with the context provider */}
    <App />
  </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
