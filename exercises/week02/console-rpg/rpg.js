const readline = require("readline-sync");
function wait(ms) {
    let start = new Date().getTime();
    let now = start;
    while(now < start + ms) {
        now = new Date().getTime();
    }
}

const characters = [
    {
        name: '',
        type: 'cat',
        skin: 'fur',
        cuteLevel: 8,
        evilLevel: 9,
    },
    {
        name: '',
        type: 'dragon',
        skin: 'scales',
        cuteLevel: 3,
        evilLevel: 5,
    },
    {
        name: '',
        type: 'Peanut Butter and Jelly Sandwich',
        skin: "peanut butter",
        cuteLevel: 0,
        evilLevel: 0,
    }
];

console.log("You awake dazed...........");
wait(2000); 
console.log("Wait.... am I actually awake???  It's so dark... ");
wait(4000);
console.log("Where am I??? ... and ... Who am I???");
wait(2000);
let name = readline.question("What is your name?  ");
wait(750);
console.log(`Thats right... I'm ${name}. `);
wait(1500);
console.log("I don't quite feel like myself...");
wait(1500);
console.log("Wait... is that... ");
console.log("OH MY GOD!!!! I'm covered in...")

const coveredIn = ['fur', 'scales', 'peanut butter',]
let index = readline.keyInSelect(coveredIn, null, {cancel: false});
let character = characters[index];
character.name = name;

console.log(`I'm covered in ${character.skin}!!!!!!`);
wait(1000);
console.log(`I... I... I think I might be a... ${character.type.toUpperCase()}!!!!!`);
wait(1000);
console.log(``);