import React, {useState, useEffect} from 'react';
import Character from './Character';


export default function CharacterList() {
  const [characters,setCharacters] = useState([]);
  const [count,setCount] = useState(0);

  useEffect(() => {  //for sideeffects ->( api calls (axios, fetch), manual DOM manipulations, )
    fetch("https://swapi.co/api/people").then((response) => {
      response.json().then((data) => {
        console.log(data.results);
        setCharacters(data.results);
      });
    });
  }, [characters.length]);

  const handleCount = (value) => {
    setCount((prevCount) => {
      return prevCount + value;
    });
  };

  const mappedCharacters = characters.map((character) => <Character handleCount={handleCount} key={character.name} name={character.name} />)

  return (
    <div className="container">
      <div>Count: {count}</div>
      {mappedCharacters}
    </div>
  );
};
