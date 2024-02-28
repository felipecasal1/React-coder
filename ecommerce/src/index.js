import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAoQUT5QpHB0MG-25JDrHM0n1qwoztgLFM",
  authDomain: "coderhouse-6be32.firebaseapp.com",
  projectId: "coderhouse-6be32",
  storageBucket: "coderhouse-6be32.appspot.com",
  messagingSenderId: "36051307346",
  appId: "1:36051307346:web:f5ce2706a326a08206c88b"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
