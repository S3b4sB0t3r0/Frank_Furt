// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,
  FaSearch, FaBars, FaTimes
} from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Para mobile dropdowns

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left-info">
          <FaMapMarkerAlt />
          <span>Colombia - Bogota</span>
          <span className="divider">/</span>
          <FaClock />
          <span> L-V 8:00AM - 5:30PM / S-D  7:00AM - 5:30PM  / F 9:30AM - 3:30PM</span>
        </div>
        <div className="social-icons">
          <span>Sigenos en nuestras redes:</span>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="icon" />
          <div className="text">
            <h2>Frank Furt</h2>
            <small>Comidas Rapidas</small>
          </div>
        </div>

        <ul className={`nav-menu ${mobileOpen ? 'active' : ''}`}>
          <li>Inicio</li>

          <li className={`has-dropdown ${openDropdown === 'pages' ? 'active' : ''}`}
              onClick={() => toggleDropdown('pages')}>
            Paginas
            <ul className="dropdown">
            <li><Link to="/about">About Us</Link></li>
            <li>Team</li>
            <li>FAQ</li>
            </ul>
          </li>

          <li className={`has-dropdown ${openDropdown === 'food' ? 'active' : ''}`}
              onClick={() => toggleDropdown('food')}>
            <Link to="/menu">Menu</Link>
            <ul className="dropdown">
              <li>Desayunos</li>
              <li>Almuerzos</li>
              <li>Cena</li>
            </ul>
          </li>


          <li>Ubicaciones</li>

          <li>Contact</li>
        </ul>

        <div className="nav-icons">
          <FaSearch className="icon-search" />
          <button className="order-btn">Comprar Ahora →</button>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
