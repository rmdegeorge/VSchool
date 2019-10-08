const lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

const sing = input => input.join(" ");
function reverse(input) {
    let array = [...input];
    return array.reverse().join(" ");
} 
function everyOtherWordString(input, start) {  // i = the starting index
    let newArray = []
    for ( i = start; i < input.length; i += 2) {
        newArray.push(input[i]);
    }
    return newArray.join(" ");
}
function everyOtherWord(input, start) {  // i = the starting index
    let newArray = []
    for ( i = start; i < input.length; i += 2) {
        newArray.push(input[i]);
    }
    return newArray;
}
function switchEveryTwo(input) {
    let newArray1 = everyOtherWord(input, 0);
    let newArray2 = everyOtherWord(input, 1);
    let finalArray = []
    for (let i = 0; i < Math.round(input.length / 2); i++) {
        if (newArray2[i] === undefined) {
            finalArray.push(newArray1[i]);
            break;
        } else {
            finalArray.push(newArray2[i]);
            finalArray.push(newArray1[i]);
        }
    }
    return finalArray;
}
function randomize(input) {
    for (let i = input.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
    return input.join(" ");
}

console.log(`\n\nSing:\n${sing(lyrics)}`);
console.log(`\n\nReverse:\n${reverse(lyrics)}`);
/*
~~~~~~~~~~~~~~~~GET HELP FOR THIS~~~~~~~~~~~~~~~~~~~~`
Why does the reverse() function reverse the array for all following functions??????
If I comment out the call of the reverse functions, then everything works perfectly...
~~~~~~~~~~~~~~~~GET HELP FOR THIS~~~~~~~~~~~~~~~~~~~~`
*/
console.log(`\n\nEveryOtherWord:\n${everyOtherWordString(lyrics, 0)}`);
console.log(`\n\nSwitchEveryTwo:\n${switchEveryTwo(lyrics)}`);
console.log(`\n\nRandomize\n${randomize(lyrics)}`);