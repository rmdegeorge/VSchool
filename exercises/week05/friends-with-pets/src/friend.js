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
      <h3 className="friendname">Name: {props.name}</h3>
      <p className="friendage">Age: {props.age}</p>
      {displayPets}
    </div>
  )
}

export default Friend;