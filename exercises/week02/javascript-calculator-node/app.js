var readline = require("readline-sync");

const add = (num1,num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (num1,num2) => num1 / num2;
const operators = ["add", "subtract", "multiply", "divide"];

let result
let num1 = +readline.question("Enter the first number:\n");
let num2 = +readline.question("Enter the second number:\n");
let opIndex

while (true) {
    //let operator = readline.question(`What operation would you like to perform?\n\t Options: 'add', 'sub', 'mul', or 'div'\n`);
    opIndex = readline.keyInSelect(operators, `Which operator would you like to use?\n`,) + 1;
    console.log(`opIndex: ${opIndex}`)
    if (opIndex === 1){
        result = num1 + num2;
        break;
    } else if (opIndex === 2) {
        result = num1 - num2;
        break;
    } else if (opIndex === 3) {
        result = num1 * num2;
        break;
    } else if (opIndex === 4) {
        result = num1 / num2;
        break
    } else {
        console.log("Invalid operator input. Please re-enter your operator")
    }
};
console.log(`The result is: ${result}`)
/*

    A function that adds two numbers and returns the result
    A function that multiplies two numbers and returns the result
    A function that divides two numbers and returns the result
    A function that subtracts two numbers and returns the result
    Each function will have 2 parameters, num1, num2
    On the console the prompt will print to the user:
    Please enter your first number (store that number)
    Please enter your second number (store that number)
    Please enter the operation to perform: add, sub, mul, div (then store the operation)
    Based on the operation entered by the user, you will call one of your 4 functions to perform the correct operation
    You will then print to the console: The result is: [the result]

*/