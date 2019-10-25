import React from 'react';
import NavBar from './navbar/Navbar.js';
import '../../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <h1>This is a Businessy Business</h1>
      <p>They do something. Perhaps to do with dogs?</p>
      <NavBar />
    </div>
  );
}

export default Header;