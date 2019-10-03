// Write a function that accepts two numbers as parameters, and returns the sum.

function sum(num1, num2) {
    return(num1 + num2);
}
let randomNum1 = Math.round(Math.random() * 100);  
let randomNum2 = Math.round(Math.random() * 100);
console.log(`\nThe sum of ${randomNum1} and ${randomNum2} is ${sum(randomNum1,randomNum2)}`)


// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

const threeNumbers = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
console.log(threeNumbers)

function largestOfThree(array) {
    let largestNum;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestNum || largestNum === undefined) {
            largestNum = array[i];
        }
    }    
    return largestNum;
}
console.log(`\nThe largest number is "${largestOfThree(threeNumbers)}".`);



// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function evenOrOdd(num) {
    return (num % 2 === 0 ? "even" : "odd");
}
console.log(`\n${randomNum1} is ${evenOrOdd(randomNum1)}.`);



// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
const myString1 = "abcdefghijkABCDEFJHIJK";
const myString2 = "abcdABCD"
function stringThing(string) {
    if (string.length <= 20) {
        return (string + string);
    } else {
        return firstHalf(string);
    }
}
function firstHalf(string) {
    return string.slice(0, Math.round(string.length / 2));
}
console.log(`\nstringThing result 1 if >= 20 chars: ${stringThing(myString1)}`);
console.log(`stringThing result 2 if < 20 chars: ${stringThing(myString2)}`);

// Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

function fibonacciGenerator(n) {
    let fib = [0];
    fib.push(fib[0] + 1);
    for (let i = 1; i < n - 1; i++) {
        fib.push(fib[i -1] + fib[i]);
    }
    return fib;
}
function sumOfFibSequence(n) {
    let fib = fibonacciGenerator(n);
    let fibSum = 0;
    for (let i = 0; i < fib.length; i++) {
        fibSum += fib[i];
    }
    return fibSum;
}
const randomNum0To20 = Math.round(Math.random() * 20)
console.log(`\nfibonacci sequence to ${randomNum0To20} numbers:`)
console.log(fibonacciGenerator(randomNum0To20));
console.log(`The sum of this sequenc is ${sumOfFibSequence(randomNum0To20)}`)



//     Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. ( White spaces count as a letter )

const myString3 = "sdifnsadfljsadjfjjjasfdfaisddkkkkkkkkk"

function findMostFrequentChar(string) {
    let charCount = countCharsInString(string);
    let mostFreqChar = {
        char: "",
        count: 0
    };
    for (let i = 0; i < charCount.length; i++) {
        if (charCount[i].count > mostFreqChar.count) {
            mostFreqChar.char = charCount[i].char;
            mostFreqChar.count = charCount[i].count;
        }
    }
    return mostFreqChar.char
}


function countCharsInString(string) {
    let charCount = [];
    let uniqueChars = findUniqueChars(string);
    for (let i = 0; i < uniqueChars.length; i++) {
        charCount.push({
            char: uniqueChars[i],
            count: 0
        })
    }
    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (charCount[i].char === string[j]) {
                charCount[i].count++;
            }
        }
    }
    return charCount;
}

function findUniqueChars(string) {
    let chars = [string[0]];
    for (let i = 0; i < string.length; i++) {
        if (!chars.includes(string[i])) {
            chars.push(string[i]);
        }
    }
    return chars;
}
/* Debugging Checks
console.log(`\n\nThe Unique characters are:\n${findUniqueChars(myString3)}`);
console.log(`\n\nResults from countCharsInString:`);
console.log(countCharsInString(myString3));
*/
console.log(`\nThe most frequent character in the string is "${findMostFrequentChar(myString3)}"`);
