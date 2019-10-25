import React from 'react';
import '../../../styles/Navbar.css';

function NavBar() {
  return (
    <navbar className="navbar">
      <a className="nav-link home" href="">Home</a>
      <a className="nav-link info" href="">Info</a>
      <a className="nav-link contact" href="">Contact</a>
    </navbar>
  );
}
export default NavBar;
