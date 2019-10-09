const myString = "I'm a String";
const randArrayGen = len => {
    const randArray = [];
    for (i = 0; i < len; i++){
        randArray.push(Math.round(Math.random()*len));
    }
    return randArray;
};
const myArray = randArrayGen(100);

const makeArray = string => {
    const newArray = [];
    for (let i = 0; i < string.length; i++){
        newArray.push(string[i]);
    };
    return newArray;
};
console.log(makeArray(myString));

const findChar = (string, char) => {
    let indexOfChar = null;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            indexOfChar = i;
            break;
        }
    }
    if (indexOfChar === null) {
        return "Character not found!";
    } else {
        return indexOfChar;
    }
};
console.log(findChar(myString,"r"));

const findNum = (array, num) => {
    let indexOfNum = null
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            indexOfNum = i;
            break;
        }
    }
    if (indexOfNum === null) {
        return "Number not found!";
    } else {
        return indexOfNum;
    }
};
console.log(findNum(myArray, 42))

const findMin = (array) => {
    let smallestNum = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < smallestNum) {
            smallestNum = array[i];
        }
    }
    return smallestNum;
}
const myArray2 = [0,1,2,3,4,-3,5,6,6,8,9,10]
console.log(findMin(myArray2));


/*

Write a function that accepts a string as input. Write a loop and
add each letter of the string to an array. Then return the that new array.

Write a function that accepts a string and a single character as inputs. 
Write a loop that iterates over the string, and returns the position of the 
first occurrence of the specified character. If the character is not found, 
tell that to the user by returning "Character not found!".

Write a function that accepts an array of numbers as a parameter.
Return "Found 42!" when the number 42 is found, return "42 not found!" if it 
is not in the array.

Write a function that accepts 10 numbers in an array and then prints out the 
smallest number out of the ten without using Math.min()

*/