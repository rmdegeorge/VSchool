import React, {useState} from 'react';

export const CountContext = React.createContext();

export default function CountProvider(props) {
  const [count, setCount] = useState(0);
  function increment(){
    setCount(prevCount => prevCount + 1);
  };
  return (
    <CountContext.Provider
      value={{count, increment}}>
      {props.children}
    </CountContext.Provider>
  );
};
