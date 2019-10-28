import React from 'react';

function Pet(props) {
  return (
    <div className="pet">
      <h4>Pet(s):</h4>
      <p>Name: {props.name}</p>
      <p>Breed: {props.breed}</p>
    </div>
  )
}

export default Pet;