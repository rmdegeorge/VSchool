import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import Product from './Product';

import list from './products.json';
const ProductList = () => {
  const mappedProducts = list.map(product => <Link key={product._id} to={`/products/${product._id}`}>{product.name}</Link>)
  return (
    <div className="Productlist">
      <h1>Products</h1>
      <div className="product-links">
        {mappedProducts}
      </div>

    
    </div>
  )
}
export default ProductList;