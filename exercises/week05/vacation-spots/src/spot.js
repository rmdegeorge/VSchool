import React from 'react';

const Spot = (props) => {
  let {place, price, timeToGo} = props
 
  let bgcolor;
  if (timeToGo === "Spring"){
    bgcolor = {backgroundColor: '#5DE877'}
  } else if (timeToGo === "Summer") {
    bgcolor = {backgroundColor: '#FF633B'}
  } else if (timeToGo === "Fall") {
    bgcolor = {backgroundColor: '#E8BA5D'}
  } else if (timeToGo === "Winter") {
    bgcolor = {backgroundColor: '#66E8FF'}
  }

  let dolSigns
  if (price < 500) {
    dolSigns = "$";
  } else if (price < 1000) {
    dolSigns = "$$";
  } else if (price >=1000) {
    dolSigns = "$$$"
  }
  return (
    <div className="spot" style={bgcolor}>
      <h3>{place}</h3>
      <p>Price: {dolSigns}{price}</p>
      <p>Best time to visit: {timeToGo}</p>
    </div>
  )
}

export default Spot;


// style="{{backgroundColor: {bgColors.Default}}}"