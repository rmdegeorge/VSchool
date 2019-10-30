import React from 'react';

function NamesContainer(props) {
  const displayNames = props.names.map((name,i) => 
      <li key={i+name}>{name}</li>) 
  return (
    <ol className="NamesList">
      {displayNames}
    </ol>
  );
}

export default NamesContainer;