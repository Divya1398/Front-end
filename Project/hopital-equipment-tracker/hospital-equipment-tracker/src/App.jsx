import React from 'react';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import EquipmentForm from './Components/EquipmentForm';
import EquipmentList from './Components/EquipmentList';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Login from './Components/Login';
import EditProfile from './Components/EditProfile';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />

          <Route path="/dash" element={<Dashboard />} />
          <Route path="/list" element={<EquipmentList />} />
          <Route path="/form" element={<EquipmentForm />} />
          <Route path="/ulogin" element={<Login />} />
          <Route path="/register" element={<EditProfile />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
