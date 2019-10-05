const myString = "Robert DeGeorge";
const myString2 = "aabbcddee";
const myString3 = "aaaabbcdddeeffghhijjjjklllmnoooop"


//--------------------------------------------------
const removeDuplicateChars = string => {return findUniqueChars(string).join("")};

function findUniqueChars(string) {
    let chars = [string[0]];
    for (let i = 0; i < string.length; i++) {
        if (!chars.includes(string[i])) {
            chars.push(string[i]);
        }
    }
    return chars;
}
// "fat arrow" function that joins the array returned in findUniqueChars as a single string
console.log(removeDuplicateChars(myString3));



//--------------------------------------------------
function removeRandomChar(input) {
    // replace char at random index between 0 and length of input string with empty string
    return input.replace(input[Math.round(Math.random() * input.length)], "");
}
console.log(removeRandomChar(myString))



//--------------------------------------------------
function scrambleString(input) {
    let splitString = input.split("");
    let length = splitString.length;

    for (let i = length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = splitString[i];
        splitString[i] = splitString[j];
        splitString[j] = temp;
    }
    return splitString.join("");
}
console.log(scrambleString(myString))


//--------------------------------------------------

function removeVowels(input) {
    let indexLog = findIndexOfVowels(input);
    let newString = replaceVowels(input,indexLog);
    let finalString = removePlaceholders(newString,indexLog.length);
    return finalString;
}
function findIndexOfVowels(input){
    let indexLog = []
    // loop through input and log index of vowels
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            indexLog.push(i);
        }
    }
    return indexLog;
}
function replaceVowels(input,indexLog) {
    // loop through array & replace vowels at indexes from indexLog with placeholder ~~replaceMe~~
    let array = input.split("")
    for (let i = 0; i < indexLog.length; i++) {
        array.splice(indexLog[i], 1, "~~replaceMe~~")
    }
    return array.join("");
}
function removePlaceholders(input,length) {
    //remove all placeholders.  THERE HAS TO BE A BETTER/SIMPLER WAY FOR ALL THIS
    for (let i = 0; i < length; i++) {
        input = input.replace("~~replaceMe~~", "");
    }
    return input;
}
console.log(removeVowels(myString));
/*
    Given a string, remove any duplicate letters.
    ///Create a function that randomly removes a letter.
    ///Create a function that scrambles the original string.
    Create a function using regular expressions that remove all vowels.
*/