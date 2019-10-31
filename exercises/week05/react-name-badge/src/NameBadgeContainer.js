import React from 'react';
import NameBadge from './NameBadge';

function NameBadgeContainer(props) {
  
  const displayBadges = props.badges.map((badge,i) => {
    let bgColor = null;
    i%2===0 ? (bgColor = 'red') : (bgColor = 'blue')
    return <NameBadge key={i+badge.firstName} badge={badge} bgcolor={bgColor} />
  })
  return (
    <div className="NameBadgeContainer">
      {displayBadges}

    </div>
  );
}


export default NameBadgeContainer;