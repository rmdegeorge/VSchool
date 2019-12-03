import React, {useState} from "react";

export default function Character(props) {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    !isSelected ? props.handleCount(1) : props.handleCount(-1)
    setIsSelected((prevIsSelected) => !prevIsSelected)
  }
  return (
    <div onClick={handleClick} style={{border: `${isSelected ? "3px solid black" : "none"}`}}>
      <h4>Name: {props.name}</h4>
    </div>
  )
}
