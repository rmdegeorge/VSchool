function twoSum(arr,int) {
  for ( let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === int) {
        return [i,j];
      };
    };
  };
};
const arr = [1,2,1,4,2,3];
const int = 4;
console.log(twoSum(arr, int));
