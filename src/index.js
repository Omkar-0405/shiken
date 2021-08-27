import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { StoreProvider } from './context/context';

ReactDOM.render(
  <React.StrictMode>

    <StoreProvider>
      <App />
    </StoreProvider>,
    
  </React.StrictMode>,
  document.getElementById('root')
);
