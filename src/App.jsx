import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import './App.css';

const App = () => (
  <>
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/calculator" element={<div>Details Page</div>} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
