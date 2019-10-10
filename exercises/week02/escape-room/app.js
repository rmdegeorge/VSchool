const readline = require("readline-sync");
// function wait(ms) {
    let start = new Date().getTime();
    let now = start;
    while(now < start + ms) {
        now = new Date().getTime();
    }
}

let hasKey = false;
let doorLocked = true;
let isAlive = true;
let handInHole = false;
let name;

console.log("You awake dazed...........");
// wait(2000); 
console.log("Wait.... am I actually awake???  It's so dark... ");
// wait(5000);
console.log("Where am I??? ... and ... Who am I???");
// wait(1500);
name = readline.question("What is your name?  ");
// wait(750);
console.log(`Thats right... I'm ${name}. `);
// wait(1500);
console.log(`and I... I think I remember... an evil witch cast a spell on me.`);
// wait(1500);
console.log(`That must be how I got here. I have to get out!`);
// wait(1000);
console.log("You feel around in the dark. The room is small and the walls are made of damp, crumbling stone.");
// wait(1000);
console.log(`you find a heavy timber door in front of you.`);
// wait(1000);
let tryDoor = readline.keyInYN('Try to open the door?  ');
if (tryDoor === true) {
    console.log(`You try to open the door, but obiously it's locked. Damn!`);
    console.log(`Perhaps there's something around here I can use to pick the lock or something.`);
} else {
    console.log(`The door will obviously be locked. I'll search every inch of this room... Perhaps there's something I can use.`);
};
let search = ['floor', 'left wall', 'back wall', 'right wall', 'front wall'];
while (isAlive && doorLocked) {
    searchIndex = readline.keyInSelect(search);
    if (searchIndex === 0) { //search floor 

    } else if (searchIndex === 1) { //search left wall 
    
    } else if (searchIndex === 2) { //search back wall

    } else if (searchIndex === 3) { //search front wall

    } else if (searchIndex === 4 { //search right wall

    })
};