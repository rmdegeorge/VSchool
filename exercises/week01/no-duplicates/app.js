const myString = "Robert DeGeorge"

function removeDuplicateChars(input) {

}
function removeRandomChar(input) {
    // replace char at random index between 0 and length of input string with empty string
    return input.replace(input[Math.round(Math.random() * input.length)], "");
}
console.log(removeRandomChar(myString))

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

function removeVowels(input) {
    let vowels = [a, e, i, o, u];
    for (let i = 0; i < vowels.length; i++) {
        //input.indexOf(vowels[i]);
    }
}
/*
    Given a string, remove any duplicate letters.
    ///Create a function that randomly removes a letter.
    ///Create a function that scrambles the original string.
    Create a function using regular expressions that remove all vowels.
*/