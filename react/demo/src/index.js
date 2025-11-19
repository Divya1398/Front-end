import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"; //css
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //js
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';  //mdb
// import "@fortawesome/fontawesome-free/css/all.min.css"; //font mdb

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);