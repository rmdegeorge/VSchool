import React from 'react';

const Spot = (props) => {
  let {place, price, timeToGo} = props
  return (
    <div className="spot">
      <h3>{place}</h3>
      <p>{price}</p>
      <p>{timeToGo}</p>
    </div>
  )
}

export default Spot;