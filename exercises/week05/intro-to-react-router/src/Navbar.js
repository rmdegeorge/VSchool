import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Navbar;