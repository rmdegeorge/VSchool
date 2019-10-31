const strings = ["1","2","3","4","5"];
// const nums = strings.map((string) => {
//   return parseInt(string);
// })
// console.log(nums);


Array.prototype.mapV2 = function(callBackFunc) {
  const newArr =[];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callBackFunc(this[i]))
  }
  return newArr;
}

const nums = strings.mapV2((string) => {
  return parseInt(string);
})
console.log(nums);
