import React from 'react';  
import ReactDOM from 'react-dom/client';
import "./App/style/index.scss"
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'App/Providers/StoreProvider/StoreProvider';

import App from './App/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider>
    <BrowserRouter>
    <App />
         </BrowserRouter> 
  </StoreProvider>
);