import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can import your CSS or styles here
import App from './App'; 
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { SnackbarProvider } from 'notistack';



const root = createRoot(document.getElementById('root')); 

root.render(
  <BrowserRouter>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </BrowserRouter>
);