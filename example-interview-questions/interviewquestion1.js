function myFunction(object) {
  const newArr = [];
  const keys = Object.keys(object);
  const values = Object.values(object);

  keys.forEach((key, index) => {
    
    for (let x = 0; x < values[index]; x++) {
      newArr.push(key)
    }
  })
  return newArr;
}


const input = {
  foo: 2, 
  bar:1, 
  baz: 3}

console.log(myFunction(input));

//Output = [‘foo’, ‘foo’, ‘bar’, ‘baz’, ‘baz’, ‘baz’]

// To get keys:  object.key()
// To get values:  object.value()