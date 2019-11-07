function checkParentheses(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      count++;
    } else if (str[i] === ')') {
      count--;
    }

    if (count < 0) {return false};
  };
  return count === 0;
}

const str1 = '(fd)(sdfa)';
const str2 = '(fd))(sdfa)';
const str3 = '((fd)(sdfa)dasfa)';
const str4 = ')fdas(fd)(sdfa)(';

console.log(checkParentheses(str1));
console.log(checkParentheses(str2));
console.log(checkParentheses(str3));
console.log(checkParentheses(str4));



// while (arr.find((element) => (element === '(' || element === ')'))) {
// }