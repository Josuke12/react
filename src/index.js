import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import state from './BLL/state.js';

window.root = ReactDOM.createRoot(document.getElementById('root'));

export function renderDOM() {
  window.root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}
renderDOM();

reportWebVitals();
