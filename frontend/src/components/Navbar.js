import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">YardCare Services</div>
      <ul className="navbar-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/Services">Services</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
}