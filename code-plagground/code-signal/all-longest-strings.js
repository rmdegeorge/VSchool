function allLongestStrings(inputArray) {
  let maxLength = 0;
  inputArray.forEach((str) => {
    let length = str.length;
    length > maxLength ? maxLength = length : null;
  })
  let newArr = [];
  inputArray.forEach((str) => {
    if (str.length === maxLength) {
      newArr.push(str)
    }
  })
  return newArr;
}

const arr = ["aba", "aa", "ad", "vcd", "aba"]
console.log(allLongestStrings(arr));