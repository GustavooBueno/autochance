// src/Header.js
import React from 'react';
import './Header.css';
import logo from './favicon.ico'; // Importação da logo
import { Link } from 'react-router-dom';

const Header = () => {  
  return (
    <header className="header bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="mr-3" /> {/* Use a logo importada */}
        <h1 className="text-xl font-bold">AutoChance</h1>
      </div>
      <nav>
      <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Página principal
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              Sobre Nós
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
