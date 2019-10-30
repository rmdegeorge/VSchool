import React from 'react';

function Vacation(props) {
  let {backgroundColor, place, price, time} = props;
  return (
    <div className="Vacation" style={{backgroundColor}}>
      <h1>{place}</h1>
      <p>{price}</p>
      <p>{time}</p>
    </div>
  );
}

export default Vacation;