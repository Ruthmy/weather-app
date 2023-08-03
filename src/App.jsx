import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Continents from './components/Continents';
import CountryDetails from './components/CountryDetails';

import './App.css';

const App = () => (
  <>
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:continent" element={<Continents />} />
        <Route path="/:continent/:country" element={<CountryDetails />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
