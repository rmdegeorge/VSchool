import React from 'react';
import Friend from './friend';

function FriendList(props) {
  const friends = [
    {
      name: "Ben",
      age: 29,
      pets: [
        {
          name: "spot",
          breed: "tabby"
        },{
          name: "John Johnson",
          breed: "husky"
        },{
          name: "Bear the bear",
          breed: "Grizzly"
        }
      ]
    },{
      name: "Bob",
      age: 31,
      pets: [
        {
          name: "Sally",
          breed: "Australian Shepard"
        }
      ]
    },{
      name: "Marcus",
      age: 25,
      pets: [
        {
          name: "Indy",
          breed: "Akita"
        },{
          name: "Anna",
          breed: "persian cat"
        }
      ]
    },{
      name: "Jacob",
      age: 20,
      pets: [
        {
          name: "fluffy",
          breed: "sphynx cat"
        },{
          name: "patches",
          breed: "sphynx cat"
        },{
          name: "tiger",
          breed: "sphynx cat"
        },{
          name: "oscar",
          breed: "sphynx cat"
        }
      ]
    }
  ]

  const displayFriends = friends.map((friend, index) => 
    <div key={friend.name + index}>
      <Friend name={friend.name} age={friend.age} pets={friend.pets} />
    </div>
  )

  return (
    <div className="friendlist">
      <h2>My Friends:</h2>
      {displayFriends}
    </div>
  )
}

export default FriendList;