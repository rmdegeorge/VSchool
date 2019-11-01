import React from 'react';

const Character = (props) => {
  let {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = props.character;
  return (
    <div className="Character">
      <h2>{name}</h2>
      <ul>
        <li>Height: {height}cm</li>
        <li>Mass: {mass}kg</li>
        <li>Hair Color: {hair_color}</li>
        <li>Skin Color: {skin_color}</li>
        <li>Eye Color: {eye_color}</li>
        <li>Birth Year: {birth_year}</li>
        <li>Gender: {gender}</li>
      </ul>
    </div>
  )};

export default Character;