// Preliminaries
console.log("\n\nPreliminaries\n");

if (5 > 3) {
    console.log("is greater than");
};

if ("cat".length === 3) {
    console.log("is the length");
};

"cat" === "dog" ? console.log("is the same") : console.log("not the same");
/*
if ("cat" === "dog") {
    console.log("is the same");
} else {
    console.log("not the same");
}
*/

// Bronze Medal
console.log("\n\nBronze Medal\n");

var person = {
    name: "Bobby",
    age: 12
};

person.age >= 18 ? console.log(`${person.name} is allowed to go to the movie`) : console.log(`${person.name} is not allowed to go to the movie`);

person.name[0] === "B" ? console.log(`${person.name} is allowed to go to the movie`) : console.log(`${person.name} is not allowed to go to the movie`);

person.name[0] === "B" && person.age >= 18 ? console.log(`${person.name} is allowed to go to the movie`) : console.log(`${person.name} is not allowed to go to the movie`);

// Silver Medal
console.log("\n\nSliver Medal\n");

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
};

1 <= 2 && 2 === 4 ? console.log("yes") : console.log("no");

// Gold Medal
console.log("\n\nGold Medal\n");

typeof "dog" === "string" ? console.log("is a string") : console.log("is not a string");

typeof "true" === "boolean" ? console.log("is a boolean") : console.log("is not a boolean");

function isDefined(variable) {
    if (variable != undefined) {
        return "the variable is defined";
    } else {
        return "the variable is not defined";
    };
}
var joe
console.log(isDefined(joe))

"s" > 12 ? console.log("yes") : console.log("no");

var myNum = 10;
myNum % 2 === 0 ? console.log(`${myNum} is even`) : console.log(`${myNum} is odd`)