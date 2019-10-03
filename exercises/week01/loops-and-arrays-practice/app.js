// #1
console.log("\n\n#1\n")
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count += 1; //count = count + 1
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

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("is old enough";
    } else {
        console.log("is not old enough");
    }
}

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough, don't let " + pronoun(i) + ".");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let " + pronoun(i) + ".");
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




/*
Console Output:

#1

There are 4 computers


#2

Mike is not old enough, don't let HIM.
Madeline is old enough, don't let HER.
Cheryl is old enough, don't let HER.
Sam is old enough, don't let HIM.
Suzy is not old enough, don't let HER.


Bonus #1

See Results Above... Already completed


Bonus #2

See Results Above... Already completed


Bonus Challenge

Sample array 1:  The light is on.
Sample array 2:  The light is on.
Sample array 3:  The light is off.
*/