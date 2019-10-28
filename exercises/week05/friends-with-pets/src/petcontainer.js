import React from 'react';
import Pet from './pet'

const PetContainer = (props) => {
  let {pets} = props
  const displayPets = pets.map((pet, index) => 
    <div key={pet.name + index}>
      <Pet name={pet.name} breed={pet.breed} />
    </div>
  )

  return (
    <div className="petcontainer">
      {displayPets}
    </div>
  )
}

export default PetContainer