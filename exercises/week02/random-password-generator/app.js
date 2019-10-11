let myString = "HELLO"
let passLength = 10

function randomPasswordGenerator(passLength) {
    const password = [];
    let randChar;
    for (let i = 0; i < passLength; i++) {
        randChar = String.fromCharCode(Math.round((Math.random() * 94) + 32));
        password.push(randChar);
    }
    return password.join("");
};
console.log(`\nYour new random password of length ${passLength} is:\n${randomPasswordGenerator(passLength)}`);

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
console.log(`\nYour new random password of length ${passLength} containing the string "${myString}" is:\n${randomPasswordGenWithString(passLength,myString)}\n`)

/*
input - password length
variable : character, new password

loop{
    from 0 to password length
    get rand number = (0-1)
    ascii codes 32 to 126 diff = 94
    randNunm* 94 -> gives number 0-94 - because we want char codes between 32 and 126
     + 32 -> moves starting num from 0 to 32
    round that num
    convert to char
    push to new password

}
make array to string

*/