function multTable(n) {
  const matrix = [];
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j<= n; j++) {
      row.push(i*j);
      // console.log(`Row = ${row}`)
    };
    matrix.push(row);
    // console.log(`matrix = ${matrix}`)
  }
  return matrix;
}

// console.log(multTable(10))
const array2 = [];
  array2[5] = 5
  console.log(array2)