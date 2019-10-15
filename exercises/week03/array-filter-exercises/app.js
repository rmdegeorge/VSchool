console.log(`~~~~~~~~~~~~~~~ONE~~~~~~~~~~~~~~~`);

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => {
       if (num > 5) {return num};
    });
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


console.log(`~~~~~~~~~~~~~~~TWO~~~~~~~~~~~~~~~`);

function evensOnly(arr) {
    return arr.filter(num => {
        if (num % 2 === 0) {return num};
    })
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


console.log(`~~~~~~~~~~~~~~THREE~~~~~~~~~~~~~~`);

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(str => {
        if (str.length <= 5) {return str};
    })
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  


console.log(`~~~~~~~~~~~~~~FOUR~~~~~~~~~~~~~~~`);

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(object => {
        if (object.member === true) {return object};
    })
}
// test
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]


console.log(`~~~~~~~~~~~~~~FIVE~~~~~~~~~~~~~~~`);

function ofAge(arr){
    return arr.filter(object => {
        if (object.age > 18) {return object};
    });
}
// test
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
