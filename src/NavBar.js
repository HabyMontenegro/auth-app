
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/pag1">Alumno</Link></li>
        <li><Link to="/pag2">Grupo</Link></li>
        <li><Link to="/pag3">Materia</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
