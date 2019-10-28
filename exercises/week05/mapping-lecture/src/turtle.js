import React from 'react';

function Turtle(props) {
  
  let {name, nickName, weapon, imgUrl, key} = props

  return (
    <div className="turtle" key={key}>
      <h1>{name}</h1>
      <h2>{nickName}</h2>
      <h3>{weapon}</h3>
      <img src={imgUrl} alt=""/>

    </div>
  )
}

export default Turtle