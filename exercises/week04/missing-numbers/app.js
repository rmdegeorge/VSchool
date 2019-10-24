const numbers = [3,5,4,8,1,2,7];
const numbers2 = [3,13,8,5,4,14,1,12,10]

function findMissingNumbers(arr) {
  // find smallest number
  let minNum = Math.min(...arr);
  // find largest number
  let maxNum = Math.max(...arr);
  // check if all numbers between are there or not
  //     if not there, push those numbers to an array and return it
  const missingNums = [];
  for(let i = minNum; i <= maxNum; i++) {
    if (arr.find(num => {
      num === i;
    }) === undefined) {
      missingNums.push(i);
    };
  };
  return missingNums;
};
 /***
  * **********************
  * THIS ISN'T WORKING YET 
  **************************
  */
console.log(findMissingNumbers(numbers));