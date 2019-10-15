console.log(`~~~~~~~~~~~~~~~ONE~~~~~~~~~~~~~~~`);

function doubleNumbers(arr){
    return arr.map(function(item) {
        return (item * 2);
    });
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


console.log(`~~~~~~~~~~~~~~~TWO~~~~~~~~~~~~~~~`);

function stringItUp(arr){
    return arr.map((item) => {
        return item.toString();
    });
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]



console.log(`~~~~~~~~~~~~~~THREE~~~~~~~~~~~~~~`);

function capitalizeNames(arr){
    return arr.map((str) => {
        let tempArray = str.toLowerCase().split('');
        tempArray[0] = tempArray[0].toUpperCase();
        return tempArray.join('');
    });
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  


console.log(`~~~~~~~~~~~~~~FOUR~~~~~~~~~~~~~~~`);

function namesOnly(arr){
    return arr.map(object => {
        return object.name;
    });
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]  



console.log(`~~~~~~~~~~~~~~FIVE~~~~~~~~~~~~~~~`);

function makeStrings(arr){
    return arr.map((object) => {
        if (object.age >= 18) {
            return `${object.name} can go to The Matrix.`;
        } else {
            return `${object.name} is under age!!`;
        }
    });
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]


console.log(`~~~~~~~~~~~~~~~SIX~~~~~~~~~~~~~~~`);

function readyToPutInTheDOM(arr){
    return arr.map(object => {
        return `<h1>${object.name}</h1><h2>${object.age}</h2>`;
    });
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
  