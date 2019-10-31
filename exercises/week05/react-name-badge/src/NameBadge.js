import React from 'react';

function NameBadge(props) {
  return (
    <div className="NameBadge">
      <div className="badgetitle" style={{backgroundColor: props.bgcolor}}>Badge:</div>
      <div className="badgeName">Name: {`${props.badge.firstName} ${props.badge.lastName}` }</div>
      <div className="badgePhone">Phone: {props.badge.phone}</div>
      <div className="badgePlaceOfBirth">Place of Birth: {props.badge.placeOfBirth}</div>
      <div className="badgeFavFood">Favorite Food: {props.badge.favFood}</div> 
      <div className="badgeEmail">Email: {props.badge.email}</div> 
      <div className="badgeAbout">{props.badge.about}</div> 
    </div>
  )
}

export default NameBadge;