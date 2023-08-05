import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Continent from './components/Continent';
import CityDetails from './components/CityDetails';

import './App.css';

const App = () => (
  <>
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:continent" element={<Continent />} />
        <Route path="/:continent/:city" element={<CityDetails />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
