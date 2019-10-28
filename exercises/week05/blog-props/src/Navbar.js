import React from 'react';
import BrandName from './Brand';
import NavMenu from './NavMenu';

const Navbar = () => {
  return (
    <div className="navbar">
      <BrandName />
      <NavMenu />
    </div>
  )
}

export default Navbar;