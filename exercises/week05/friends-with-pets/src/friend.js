import React from 'react';
import PetContainer from './petcontainer';

function Friend(props) {
  
  let {name, age, pets} = props
  return (
    <div className="friend">
      <div>
        <h3 className="friendname">Name: {name}</h3>
        <p className="friendage">Age: {age}</p>
      </div>
      <PetContainer pets={pets}/>
    </div>
  )
}

export default Friend;