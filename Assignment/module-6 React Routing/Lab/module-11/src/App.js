import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './Task-1/Page/Home';
import About from './Task-1/Page/About'
import Home1 from './Task-2/Page1/Home1'
import About1 from './Task-2/Page1/About1'
import Contact from './Task-2/Page1/Contact'

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    // </BrowserRouter>
  );
}

export default App;
