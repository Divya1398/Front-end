import React from 'react';
import Table from './Table';
import Crud from './Crud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import AddUser from './AddUser';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar always visible */}
        <Nav />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<h1 className="text-center mt-4">Welcome Home</h1>} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/table" element={<Table />} />
          <Route path="/add-user" element={<AddUser/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
