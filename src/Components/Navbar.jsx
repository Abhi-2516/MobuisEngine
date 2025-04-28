import React from 'react';
import '../styles/navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src= 'src\images\logo.png' alt="Mobius Engine Logo" />
      </div>
      <div className="navbar-center">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Plans</a>
        <a href="#">Testimonials</a>
        <a href="#">Privacy Policy</a>
        <a href="#">More</a>
      </div>
      <div className="navbar-right">
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
