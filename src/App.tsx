import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import PlayGround from './components/PlayGround';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayGround />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
