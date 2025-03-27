import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Si tienes estilos globales
import App from './App'; // Asegúrate de que tienes el archivo App.js en src

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});