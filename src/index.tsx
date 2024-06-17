import React from 'react';  
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './APP/Providers/StoreProvider/StoreProvidet';
import App from './App/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider>
    <BrowserRouter>
    <App/>
         </BrowserRouter> 
  </StoreProvider>
);