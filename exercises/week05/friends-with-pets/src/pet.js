import React from 'react';

function Pet(props) {
  return (
    <div className="pet">
      <h4 className="pettitle">Pet(s):</h4>
      <p className="petname">Name: {props.name}</p>
      <p className="petbreed">Breed: {props.breed}</p>
    </div>
  )
}

export default Pet;