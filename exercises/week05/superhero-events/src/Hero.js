import React from 'react';

function Hero(props) {
  const {name, catchPhrase, image} = props;
  const handleClick = () => {
    alert(catchPhrase);
  }
  return (
    <div className="Hero" onClick={handleClick}>
      <h1>{name}</h1>
      <img className="img" src={image} alt={name + " Image"}/>
    </div>
  )
}

export default Hero;