Array.prototype.filterV2 = function(callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? newArr.push(this[i]) : null;
  };
  return newArr;
};

const positivesV2 = nums.filterV2(num => {
  return num > 0;
});
console.log(positivesV2);

// const nums = [-4, 6 -32, 65, -21, 8, 9, 100];
// const positives = nums.filter(num => {
//   return num > 0;
// });
// console.log(positives);
