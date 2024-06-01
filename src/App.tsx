import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import PlayGround from './components/PlayGround';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PlayGround darkMode={handleDark} dark={darkMode} />}
        />
        <Route
          path="/about"
          element={<About darkMode={handleDark} dark={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
