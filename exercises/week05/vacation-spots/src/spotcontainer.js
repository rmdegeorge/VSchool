import React from 'react';
import Spot from './spot';
import vacationSpotsInfo from './vacationspots.json';


const SpotContainer = (props) => {
  const mappedSpots = vacationSpotsInfo.map((spot, i) => 
  
  <Spot key={spot.place + i}
        place={spot.place}
        price={spot.price}
        timeToGo={spot.timeToGo} />
  )
  return (
    <div className="spotcontainer">
      {mappedSpots}
    </div>
  )
}

export default SpotContainer;