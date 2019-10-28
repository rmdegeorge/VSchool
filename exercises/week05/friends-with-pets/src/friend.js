import React from 'react';
import Pet from './pet';

function Friend(props) {
  
  const displayPets = props.pets.map((pet, index) => 
  <div key={pet.name + index}>
    <Pet name={pet.name} breed={pet.breed} />
  </div>
)
  return (
    <div className="friend">
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      {displayPets}
    </div>
  )
}

export default Friend;