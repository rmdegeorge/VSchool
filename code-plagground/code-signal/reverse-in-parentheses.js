function reverseInParentheses(inputString) {
  // find index of all ( ) pairs
  let inputArr = inputString.split('');
  const locationOfParentheses = [];
  inputArr.forEach((char,i) => {
    if (char === '(') {
      locationOfParentheses.push({char: char, index: i})
    } else if (char === ')') {
      locationOfParentheses.push({char: char, index: i})
    };
  })

  // find pairs of parentheses
  let numOpen = 0;
  for (let i = 0; i < locationOfParentheses.length; i++) {
    if (locationOfParentheses[i].char === '(' && numOpen === 0) {

    } else if (locationOfParentheses[i].char === '(' && numOpen > 0) {

    } else if (locationOfParentheses[i].char === ')') {
      
    }

  }
  console.log(locationOfParentheses);
}


const string1 = "foo(bar(baz))blim";  // "foobazrabblim"
const string2 = "foo(bar)baz(blim)";  // "foorabbazmilb"
console.log(reverseInParentheses(string1));
console.log(reverseInParentheses(string2));