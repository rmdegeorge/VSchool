import React from 'react';
import ProductList from './products-list/Productlist.js';
import '../../styles/Body.css';

function Body() {
  return (
    <div className="body">
      <h2>Main section</h2>
      <ProductList />
    </div>
  );
}

export default Body;