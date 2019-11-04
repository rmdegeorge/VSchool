function reverseInParentheses(inputString) {
  
  // find index of all ( ) pairs
  let inputArr = inputString.split('');
  let locationOfParentheses = [];
  let openParIndex;
  let closeParIndex;

  // while there are still parentheses in the array
  while(inputArr.find((element) => element === '(') != undefined) {
    locationOfParentheses = [];
    inputArr.forEach((char,i) => {
      if (char === '(') {
        locationOfParentheses.push({char: char, index: i})
      } else if (char === ')') {
        locationOfParentheses.push({char: char, index: i})
      };
    })

    // find inner most pair of parentheses
    openParIndex = null;
    closeParIndex = null;
    for (let i = 0; i < locationOfParentheses.length; i++) {
      if (locationOfParentheses[i].char === '(' && locationOfParentheses[i+1].char === ')') {
        openParIndex = locationOfParentheses[i].index;
        closeParIndex = locationOfParentheses[i+1].index;
        break;
      };
    };
    
    // separate part to be reversed
    let innerArr = inputArr.splice(openParIndex+1, closeParIndex-openParIndex-1);

    //remove these parentheses
    inputArr.splice(openParIndex, 2);

    // reverse innerArr
    innerArr.reverse();

    // put reversed array back into original array
    for (let i = 0; i < innerArr.length; i++) {
      inputArr.splice(openParIndex+i, 0, innerArr[i]);
    }

  };
  let finalStr = inputArr.join("");
  return finalStr;
}




const string1 = "(bar)"               // "rab"
const string2 = "foo(bar(baz))blim";  // "foobazrabblim"
const string3 = "foo(bar)baz(blim)";  // "foorabbazmilb"
const string4 = "foo(bar(joe(billy(hi)fjhd(by)(fhd(fj)gds)gae)sa)fd)fdsa"
const string5 = "fasdfasdfa"


console.log(`FINAL: ${reverseInParentheses(string1)}`);
console.log(`FINAL: ${reverseInParentheses(string2)}`);
console.log(`FINAL: ${reverseInParentheses(string3)}`);
console.log(`FINAL: ${reverseInParentheses(string4)}`);
console.log(`FINAL: ${reverseInParentheses(string5)}`);
