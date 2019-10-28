import React from 'react';
import Box from './box'
import './App.css';

function App() {
  const colors = ['red', 'yellow', 'blue', 'orange', 'grey', 'light blue', 'pink', 'cyan', 'green', 'brown'];
  const boxes = [];
  for (let i = 0; i < 10; i++) {
    boxes.push(
      {
      title: "Title " + i,
      subtitle: "Subtitle " + i,
      info: "Info " + i,
      styles: {
        backgroundColor: colors[i],
        borderRadius: "20px",
      }
    })
  };
  console.log(boxes);
  const displayBoxes = boxes.map((box, index) =>
    <div key={box.title + index}>
      <Box title={box.title} subtitle={box.subtitle} info={box.info} styles={box.styles} />
    </div>
  )
  return (
    <div className="App">
      {displayBoxes}
    </div>
  );
}

export default App;
