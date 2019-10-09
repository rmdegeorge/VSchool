let myString = "HELLO"
let passLength = 10

function randomPasswordGenerator(passLength) {
    const password = [];
    let randChar = ""
    for (let i = 0; i < passLength; i++) {
        randChar = String.fromCharCode(Math.floor((Math.random() * 94) + 32));
        password.push(randChar);
    }
    return password.join("");
};
console.log(`\nYour new random of length ${passLength}password is:\n${randomPasswordGenerator(10)}`);

function randomPasswordGenWithString(passLength, string) {
    const password = [];
    let randChar = ""
    for (let i = 0; i < passLength - string.length; i++) {
        randChar = String.fromCharCode(Math.floor((Math.random() * 94) + 32));
        password.push(randChar);
    }
    const array = string.split("");
    for (let i = 0; i < array.length; i++){
        let randNum = Math.round(Math.random()*password.length)
        password.splice(randNum,0,array[i]);
    }
    return password.join("");
};
console.log(`\nYour new random password of length ${passLength} containing the string "${myString}" is:\n${randomPasswordGenWithString(15,myString)}\n`)