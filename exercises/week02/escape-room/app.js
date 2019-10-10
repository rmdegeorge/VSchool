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
let isInRoom = true;

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
    wait(2000);
    console.log(`Perhaps there's something around here I can use to pick the lock or something.`);
    wait(1000);
} else {
    console.log(`The door will obviously be locked. I'll search every inch of this room... Perhaps there's something I can use.`);
    wait(1000);
};
wait(1000);
let search = ['floor', 'left wall', 'back wall', 'front wall', 'right wall'];
while (isAlive && isInRoom) {
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nWhere would you like to search? `);
    searchIndex = readline.keyInSelect(search, null, {cancel: false});
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
                    if (readline.keyInYN(`You have a nail in your pocket! Would you like to use the nail to scrape the dirt away?`)) {
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
        if (hasKey){
            wait(1000);
            console.log(`You find nothing here but cold stone.`)
            wait(1000);
            console.log(`You decide to keep looking around the room.`);
            wait(1000);
        } else {
            console.log(`As you run your hands along the wall, you feel a stone move.`);
            if (readline.keyInYN(`Pull on loose stone?  `)) {
                console.log(`You pulled the stone out! Behind the stone you find a KEY!!!`);
                wait(1000);
                console.log(`You put the key in your pocket.`)
                wait(1000);
                hasKey = true;
                inventory.push('key');
            } else {
                console.log(`You're concerned that the wall would collapse if you pull on the stone.`);
                wait(1000);
                console.log(`You decide to leave it alone...`);
                wait(1000);
                console.log(`I think I'll keep looking around the room.`);
                wait(1000);
            }
        }
    } else if (searchIndex === 3) { //search front wall
        console.log(`This is where the door is.`)
        wait(1000);
        if (readline.keyInYN('Try to open the door?  ')) {
            wait(1000);
            if (doorLocked) {
                console.log(`The door is locked... `)
                wait(1000);
                if (hasKey) {
                    //has key
                    console.log(`You have a key in your pocket! It couldn't possibly be the key to the door, could it???`);
                    if (readline.keyInYN(`Do you want try to unlock the door using your key? `)) {
                        console.log(`You place the key in the lock. `);
                        wait(1000);
                        console.log('With a little effort the rusty lock clicks open!!!');
                        wait(1000);
                        doorLocked = false;
                        if (readline.keyInYN(`Do you open the door? `)) {
                            console.log(`You push the door open and fresh air and light pour over you!`)
                            wait(1000);
                            console.log(`You're free!!!!!`);
                            console.log(`.....................................`)
                            console.log(`.....................................`)
                            console.log(`................YAY..................`)
                            console.log(`..............YOU WIN................`)
                            console.log(`.....................................`)
                            console.log(`.....................................`)
                            console.log(`.....................................`)
                            isInRoom = false;
                        } else {
                            wait(1000);
                            console.log(`You decide to not open the door yet and keep checking around the room before you leave.`);
                            wait(1000);
                            continue;
                        }
                        
                    } else {
                        console.log(`There's no way someone would lock you in a room with the key to the door.`);
                        wait(1000);
                        console.log(`You decide to keep searching the room.`);
                        wait(1000);
                        continue;
                    }
                } else {
                    console.log(`The door is locked, there's no way I can get this open.`);
                    wait(1000);
                    console.log(`You decide to keep searching the room.`);
                    wait(1000);
                    continue;
                }
            } else {
                console.log(`You've already unlocked the door.`)
                wait(1000);                
                if (readline.keyInYN(`Do you open the door? `)) {
                    console.log(`You push the door open and fresh air and light pour over you!`)
                    wait(1000);
                    console.log(`You're free!!!!!`);
                    console.log(`.....................................`)
                    console.log(`.....................................`)
                    console.log(`................YAY..................`)
                    console.log(`..............YOU WIN................`)
                    console.log(`.....................................`)
                    console.log(`.....................................`)
                    console.log(`.....................................`)
                    isInRoom = false;
                } else {
                    console.log(`You decide to not open the door yet and keep checking around the room before you leave.`);
                    continue;
                }
            }
        } else {
            console.log(`Perhaps there's something around here I can use to pick the lock or something.`);        };
    } else if (searchIndex === 4) { //search right wall
        wait(1000);
        console.log(`You search the whole wall, but find nothing but cold, damp, solid stone...`);
        wait(1000);
        console.log(`I think I'll keep looking around the room.`);
        wait(1000);

    };
     wait(2000);
};



