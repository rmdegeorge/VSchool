// #1
console.log("\n\n#1\n")
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count += 1;
    }

}
console.log(`There are ${count} computers`);

// #2
console.log("\n\n#2\n")
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
];
for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough, don't let ${pronoun(i)}.`);
    } else {
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough, don't let ${pronoun(i)}.`);
    }
}

// Bonus #1
console.log("\n\nBonus #1\n")
console.log("See Results Above... Already completed")

// Bonus #2
console.log("\n\nBonus #2\n")
function pronoun(index) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[index].gender === "male") {
        return "HIM";
     } else {
        return "HER";
     }
}
console.log("See Results Above... Already completed")

// Bonus Challenge
console.log("\n\nBonus Challenge\n");
var lightOn = false;
function isLightOn(array) {
    let count =  0;
    for (let i = 0; i < array.length; i++) {
        count += array[i];
    }
    if (count % 2 === 0) {
        return "The light is off.";
    } else {
        return "The light is on.";
    }
}
var array1 = [2, 5, 435, 4, 3]
var array2 = [1, 1, 1, 1, 3]
var array3 = [9, 3, 4, 2]
console.log(`Sample array 1:  ${isLightOn(array1)}`)
console.log(`Sample array 2:  ${isLightOn(array2)}`)
console.log(`Sample array 3:  ${isLightOn(array3)}`)