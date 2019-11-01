import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <h1>React Roto-Router</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
      </div>
    </div>
  )
}

export default Navbar;