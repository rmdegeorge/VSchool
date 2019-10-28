import React from 'react';
import Friend from './friend';
import friends from './friendlist.json';

function FriendList(props) {

  const displayFriends = friends.map((friend, index) => 
    <div key={friend.name + index}>
      <Friend name={friend.name} age={friend.age} pets={friend.pets} />
    </div>
  )

  return (
    <div className="friendlist">
      <h1>My Friends:</h1>
      {displayFriends}
    </div>
  )
}

export default FriendList;