import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Si tienes estilos globales
import App from './App'; // Asegúrate de que tienes el archivo App.js en src

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root') // Aquí es donde React inyecta el componente
);