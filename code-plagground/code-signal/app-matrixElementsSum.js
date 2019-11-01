function findZeroElInRow(matrix) {
  console.log(matrix);
  const indicesWithZeros = [];
  let sum = 0;
  matrix.forEach((row) => {
    row.forEach((element,j) => {
      if (indicesWithZeros.find((index) => index === j) === element || element === 0) {
        if (indicesWithZeros.find((index) => index === j) !== element) {
          indicesWithZeros.push(j);
        }
      } else if (element !== 0 && indicesWithZeros.find((index) => index === j) !== j){
        sum += element;
        console.log(`sum= ${sum}`)
      }
      console.log(`row= ${row} element= ${element}`)
      console.log(`indicesWithZeros -> ${indicesWithZeros}`);
    })
  })
  return sum;
}

const matrix = [[0,1,1,2], 
                [0,5,0,0], 
                [2,0,3,3]];

console.log( findZeroElInRow(matrix));