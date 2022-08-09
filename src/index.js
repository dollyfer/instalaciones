import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {initializeApp} from "firebase/app";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpRZd9CLw8ya6scRuFSx8aMHybySofmbw",
  authDomain: "nailswithdo-fernandez.firebaseapp.com",
  projectId: "nailswithdo-fernandez",
  storageBucket: "nailswithdo-fernandez.appspot.com",
  messagingSenderId: "252309909647",
  appId: "1:252309909647:web:25ee11436bec6c9d7440fa",
  measurementId: "G-E5Q40NSNPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


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

