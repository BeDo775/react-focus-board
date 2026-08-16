import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary px-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">FocusBoard</NavLink>
        <div className="navbar-nav gap-2">
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-white' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-white' : ''}`} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active fw-bold text-white' : ''}`} to="/contact">Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}