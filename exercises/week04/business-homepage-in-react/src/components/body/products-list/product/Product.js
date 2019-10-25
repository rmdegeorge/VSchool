import React from 'react';

// CSS style
import '../../../../styles/Product.css';

function Product(props) {
  const styles = {
    color: "dark red",
  }
  return (
    <div className="product" style={styles}>  
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img class='product-img' src={props.imgSRC} alt={props.imgAlt}/>
    </div>
  );
}

export default Product;