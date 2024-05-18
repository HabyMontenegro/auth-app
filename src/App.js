// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Inicio from './Inicio';
import Pag1 from './Pag1';
import Pag2 from './Pag2';
import Pag3 from './Pag3';
import NavBar from './NavBar';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/pag1" element={<Pag1 />} />
              <Route path="/pag2" element={<Pag2 />} />
              <Route path="/pag3" element={<Pag3 />} />
            </Routes>
          </>
        ) : (
          <Login onLogin={setIsLoggedIn} />
        )}
      </div>
    </Router>
  );
}

export default App;
