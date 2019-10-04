const myString = "RobDeGeorge"


//#1 ----------------------------------
//Make a function that will return any given string 
//into all caps followed by the same string all lowercase.

/* ~~LONGFORM~~
    function capitalizeAndLowercase(string) {
        return (string.toUpperCase() + string.toLowerCase());
    } 
    */
const capitalizeAndLowercase = string => (string.toUpperCase() + string.toLowerCase());
console.log(capitalizeAndLowercase(myString));

//#2 ----------------------------------
//Make a function that returns a number half the length, 
//and rounded down. You'll need to use Math.floor().

    /* ~~LONGFORM~~
    function findMiddleIndex(string) {
        return Math.floor(string.length / 2);
    }
    */
const findMiddleIndex = string => Math.floor(string.length / 2);
console.log(findMiddleIndex(myString));

//#3 ----------------------------------
//Make a function that uses slice() and the other 
//functions you've written to return the first half of the string

    /* ~~LONGFORM~~
    function returnFirstHalf(string) {
        return string.slice(0,findMiddleIndex(string));
    }
    */
const returnFirstHalf = string => (string.slice(0,findMiddleIndex(string)));
console.log(returnFirstHalf(myString));

//#4 ----------------------------------
//Make a function that takes a string and returns that string where 
//the first half is capitalized, and the second half is lower cased. 
//(If the string length is odd, capitalize the shorter of the first half.)

    /* ~~LONGFORM~~
    function returnSecondHalf(string) {
        return string.slice(findMiddleIndex(string),string.length);
    }
    */
        /* ~~LONGFORM~~
    function capitalizeFirstLowerSecond(string) {
        return (returnFirstHalf(string).toUpperCase() + returnSecondHalf(string).toLowerCase());
    }
    */
const returnSecondHalf = string => string.slice(findMiddleIndex(string),string.length);
const capitalizeFirstLowerSecond = string => (returnFirstHalf(string).toUpperCase() + returnSecondHalf(string).toLowerCase());
console.log(capitalizeFirstLowerSecond(myString));

//#5 ----------------------------------
//Optional Code Challenge (This one is a step up in difficulty):
//Make a function that takes any string and capitalizes any character 
//that follows a space.

var myString2 = "hey friends! practice practice practice!"
function capitalize(string) {
    let splitString = string.split(" ");
    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].slice(0,1).toUpperCase() + splitString[i].slice(1);
    }
    return splitString.join(" ");
}
console.log(capitalize(myString2));