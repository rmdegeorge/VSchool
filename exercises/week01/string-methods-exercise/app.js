console.log("\n\n#1 ----------------------------------\nMake a function that will return any given string \ninto all caps followed by the same string all lowercase.\n");

const myString = "RobDeGeorge"
function capitalizeAndLowercase(string) {
    return (string.toUpperCase() + string.toLowerCase());
} 
console.log(capitalizeAndLowercase(myString));

console.log("\n\n#2 ----------------------------------\nMake a function that returns a number half the length, \nand rounded down. You'll need to use Math.floor().\n");

function findMiddleIndex(string) {
    return Math.floor(string.length / 2);
}
console.log(findMiddleIndex(myString));

console.log("\n\n#3 ----------------------------------\nMake a function that uses slice() and the other \nfunctions you've written to return the first half of the \nstring\n");

function returnFirstHalf(string) {
    return string.slice(0,findMiddleIndex(string));
}
console.log(returnFirstHalf(myString));

console.log("\n\n#4 ----------------------------------\nMake a function that takes a string and returns that \nstring where the first half is capitalized, and the second \nhalf is lower cased. (If the string length is odd, capitalize \nthe shorter of the first half.)\n");

function returnSecondHalf(string) {
    return string.slice(findMiddleIndex(string),string.length);
}
function capitalizeFirstLowerSecond(string) {
    return (returnFirstHalf(string).toUpperCase() + returnSecondHalf(string).toLowerCase());
}
console.log(capitalizeFirstLowerSecond(myString));

console.log("\n\n#5 ----------------------------------\nOptional Code Challenge (This one is a step up in \ndifficulty):\nMake a function that takes any string and capitalizes \nany character that follows a space.\n");

var myString2 = "hey friends! practice practice practice!"
function capitalize(string) {
    let splitString = string.split(" ");
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].slice(0,1).toUpperCase() + splitString[i].slice(1);
    }
    return splitString.join(" ");
}
console.log(capitalize(myString2));