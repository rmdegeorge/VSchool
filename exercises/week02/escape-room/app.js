const readline = require("readline-sync");

function wait(ms) {
    let start = new Date().getTime();
    let now = start;
    while(now < start + ms) {
        now = new Date().getTime();
    }
};

function checkInventory(item) {
    let hasItem = false
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i] === item) {
            hasItem = true;
            break
         };
    };
    return hasItem;
};

let inventory = []
let hasKey = false;
let doorLocked = true;
let isAlive = true;
let handInHole = false;
let name;
let holeOpen = false;

console.log("You awake dazed...........");
wait(2000); 
console.log("Wait.... am I actually awake???  It's so dark... ");
wait(3000);
console.log("Where am I??? ... and ... Who am I???");
wait(1500);
name = readline.question("What is your name?  ");
wait(750);
console.log(`Thats right... I'm ${name}. `);
wait(1500);
console.log(`and I... I think I remember... an evil witch cast a spell on me.`);
wait(1500);
console.log(`That must be how I got here. I have to get out!`);
wait(1000);
console.log("You feel around in the dark. The room is small and the walls are made of damp, crumbling stone.");
wait(1000);
console.log(`you find a heavy timber door in front of you.`);
wait(1000);
if (readline.keyInYN('Try to open the door?  ')) {
    console.log(`You try to open the door, but of course it's locked. Damn!`);
    wait(1000);
    console.log(`Perhaps there's something around here I can use to pick the lock or something.`);
} else {
    console.log(`The door will obviously be locked. I'll search every inch of this room... Perhaps there's something I can use.`);
};
wait(1000);
let search = ['floor', 'left wall', 'back wall', 'right wall', 'front wall'];
while (isAlive && doorLocked) {
    console.log(`Where would you like to search? `);
    searchIndex = readline.keyInSelect(search);
    if (searchIndex === 0) { //search floor 
        console.log(`You get down on your hands and knees and begin to search the ${search[searchIndex]}.`);
        wait(2000);
        if (!checkInventory('nail')) {
            console.log(`You find an old rusty nail! You put it in your pocket. It could be useful later.`);
            wait(1000);
            inventory.push('nail');
            continue;
        } else {
            wait(1000);
            console.log(`There's here nothing but bare stone.`);
            wait(1000);
            console.log(`I'll keep looking around the room.`);
            continue;
        }        

    } else if (searchIndex === 1) { //search left wall 
        console.log(`You turn to the left wall. `);
        wait(1000);
        if (!holeOpen) {
            console.log(`As you run you hands along the wet crumbly stone, you notice a small finger sized hole between the stone.`);
            wait(1000);
            console.log(`The stones are sort of loose here.`)
            wait(1000);
            if (readline.keyInYN(`Would you like to try dig the stones out and open the hole?  `)) {
                wait(1000);
                if (checkInventory('nail')) {
                    wait(1000);
                    if (readline.keyInYN(`You have a nail in your pocked! Would you like to use the nail to scrape the dirt away?`)) {
                        wait(1000);
                        console.log(`.....................`)
                        wait(1000);
                        console.log(`You dig for what feels like hours! at least you have a nail.  Without it the sharp stone would surely have destroyed your fingers.`)
                        wait(1000);
                        console.log(`Finally you've managed to make the hole large enough that you might just be able to squeeze through.`);
                        console.log(`The air flowing from the hole is hot, moist, and sour smelling...  That's weird... I wonder where it leads...`)
                        wait(1000);
                        holeOpen = true;
                        if (readline.keyInYN(`Would you like to reach into hole and try to climb through?`)) {
                            wait(1000);
                            console.log(`You reach into the hole and start trying to scqueeze through. `);
                            wait(500);
                            console.log(`you get into the hole up to your hips when your hands touch something slimey. You hear a low growl.`);
                            wait(500);
                            console.log(`What the...?????`)
                            wait(500);
                            console.log(`AAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHRRRRRRRRGRRGRGGGGHHHHHH..................`);
                            wait(1000);
                            console.log(`...................................`);
                            console.log(`...................................`);
                            console.log(`...................................`);
                            console.log(`...................................`);
                            console.log(`~~~~~~~~~~~GAME OVER~~~~~~~~~~~~~~~`);
                            console.log(`~~~~~~~~~~YOU ARE DEAD~~~~~~~~~~~~~`);
                            console.log(`...................................`);
                            console.log(`...................................`);
                            console.log(`...................................`);
                            console.log(`...................................`);
                            isAlive = false;
                        } else {
                            console.log(`I think I'll keep looking around the room first.`)
                            continue;
                        }
                    } else {
                        console.log(`You decide to use your fingers to dig at the stone.`);
                        console.log(`OUCH!!! The darkness combined with your excitement at the possiblity of escape made you reckless and you cut your fingers.`);
                        console.log(`This is hopeless... if only you had some sort of tool to dig with.`);
                        console.log(`I'll keep looking around the room.`);
                    }
                } else {
                    console.log(`You have nothing to dig with, so you decide to use your fingers to dig at the stone.`);
                        console.log(`OUCH!!! The darkness combined with your excitement at the possiblity of escape made you reckless and you cut your fingers.`);
                        console.log(`This is hopeless... if only you had some sort of tool to dig with.`);
                        console.log(`I'll keep looking around the room.`);
                }
            } else{
                continue;
            }
        } else {
            console.log(`This is the hole that you dug.`)
            wait(1000);
            if (readline.keyInYN(`Would you like to reach into hole and try to climb through?`)) {
                wait(1000);
                console.log(`You reach into the hole and start trying to scqueeze through. `);
                wait(500);
                console.log(`you get into the hole up to your hips when your hands touch something slimey. You hear a low growl.`);
                wait(500);
                console.log(`What the...?????`)
                wait(500);
                console.log(`AAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHRRRRRRRRGRRGRGGGGHHHHHH..................`);
                wait(1000);
                console.log(`...................................`);
                console.log(`...................................`);
                console.log(`...................................`);
                console.log(`...................................`);
                console.log(`~~~~~~~~~~~GAME OVER~~~~~~~~~~~~~~~`);
                console.log(`~~~~~~~~~~YOU ARE DEAD~~~~~~~~~~~~~`);
                console.log(`...................................`);
                console.log(`...................................`);
                console.log(`...................................`);
                console.log(`...................................`);
                isAlive = false;
                continue;
            } else {
                console.log(`I think I'll keep looking around the room first.`)
                continue;
            }
        }
    } else if (searchIndex === 2) { //search back wall
        if (/*have key*/){
            //find nothing
        } else {
            //find key here
        }
    } else if (searchIndex === 3) { //search front wall
        console.log(`This is where the door is.`)
        if (readline.keyInYN('Try to open the door?  ')) {
            if (doorLocked) {
                // door locked
                //
            } else {
                // door unlocked
                // door opens
                // escape
            }
        } else {
            console.log(`Perhaps there's something around here I can use to pick the lock or something.`);        };
    } else if (searchIndex === 4) { //search right wall
        //find nothing here
    };
     wait(2000);
};



