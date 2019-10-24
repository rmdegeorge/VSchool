import React from 'react';
import Product from './product/product.js'
function ProductList() {
  return (
    <div className="product-list">  
      <h3>List of Products</h3>
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default ProductList;