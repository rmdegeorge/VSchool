// Problem 1


// function countCode(arr) {
//     let count=0;
//     arr.map(str => {
//         if (str === 'code') {
//             count++;
//         };
//     });
//     return count;
// };

// const countCode = (arr) => arr.filter(str => str=== 'code').length;

// arr = ["code", "code", "cool"];
// arr2 = ["code", "code", "cool", "code"];
// arr3 = ["coe", "ode", "cool", "pool"];
// console.log(countCode(arr));
// console.log(countCode(arr2));
// console.log(countCode(arr3));



//Problem 2


// function countCodeInString(str) {
//     let count = 0;
//     // let index = str.indexOf('c');
//     for (i = 0; i < str.length; i++) {
//         if (str[i] === 'c' && str[i+1] === 'o' && str[i+3] === 'e') {
//             count++;
//         }; 
//     };
//     return count;
// }
str = "aaacodebbb";
str2 = "codexxcode";
str3 = "cozexxcope";
// console.log(`code appears ${countCodeInString(str)} times`);
// console.log(`code appears ${countCodeInString(str2)} times`);
// console.log(`code appears ${countCodeInString(str3)} times`);

// const countCode3 = str => str.match(/co.e/gi).length;

// EXTRA CREDEIT
const countCode3 = str => str.match(/.o.e/gi).filter(word => word[0].charCodeAt(0) < 91 || word[0] === 'c').length;
console.log(countCode3('code fbspocoeefCodecoDecDdEsocnfjds;coen Gore'));