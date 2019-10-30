import React from 'react';
import NameBadge from './NameBadge';

function NameBadgeContainer(props) {
  const displayBadges = props.badges.map((badge,i) => {
    return <NameBadge key={i+badge.firstName} badge={badge} />
  })
  return (
    <div className="NameBadgeContainer">
      {displayBadges}

    </div>
  );
}


export default NameBadgeContainer;