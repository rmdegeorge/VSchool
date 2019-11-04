import React from 'react';

function HitListItem(props) {
  return (
    <div className='HitListItem'>
      <img className="image" src={props.imgURL} alt={`Image of: ${props.name}`} />
      <div className="name">{props.name}</div>
    </div>
  );
}

export default HitListItem;