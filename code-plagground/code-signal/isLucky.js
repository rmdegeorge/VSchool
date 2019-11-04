function isLucky(n) {
  let arr1 = n.toString().split('');
  let mid = arr1.length / 2;
  let arr2 = arr1.splice(mid);
  console.log(`originalNum= ${n}\narr1= ${arr1}\narr2= ${arr2}`)
  let sum1 = 0;
  let sum2 = 0;
  arr1.forEach((num) => sum1 += parseInt(num));
  arr2.forEach((num) => sum2 += parseInt(num));
  return sum1 === sum2;
}
const number = 1230;
console.log(isLucky(number));