const readline = require("readline-sync");

function wait(ms) {
    let start = new Date().getTime();
    let now = start;
    while(now < start + ms) {
        now = new Date().getTime();
    }
}

function Character(name,type,skin,cuteLevel,evilLevel,hp,ap) {
    this.name = name;
    this.type = type;
    this.skin = skin;
    this.cuteLevel = cuteLevel;
    this.evilLevel = evilLevel;
    this.hp = hp;
    this.ap = ap;
}
const pbj = new Character('', 'Peanut Butter and Jelly Sandwich', 'Peanut Butter', 0, 0, 5, 0);
const cat = new Character('', 'Cat', 'Fur', 10, 10, 9, 7);
const dragon = new Character('', 'Dragon', 'Scales', 1, 5, 12, 10)

const charactersArray = [pbj, cat, dragon];

function Enemy(name,hp,ap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const mouse = new Enemy('Mickey', 3, 2);
const dog = new Enemy('Spot', 5, 4);
const gardenGnome = new Enemy('Frank the Garden Gnome', 7, 2);  
const enemies = [mouse, dog, gardenGnome]
let isAlive = true;
let hasWon = false;


console.log("You awake dazed...........");
// wait(2000); 
console.log("Wait.... am I actually awake???  It feels like I'm dreaming... ");
// wait(4000);
console.log("Where am I??? ... and ... Who am I???");
// wait(2000);
const name = readline.question("What is your name?  ");
// wait(750);
console.log(`Thats right... I'm ${name}. `);
// wait(1500);
console.log("I don't quite feel like myself...");
// wait(1500);
console.log("Wait... is that... ");
// wait(1500);
console.log("OH MY GOD!!!! I'm covered in...")

const coveredIn = ['Fur (f)', 'Scales (s)', 'Peanut Butter? (p)',]
let choice
let character;
while (true) {
    choice = readline.keyIn(coveredIn, 'What are you covered in?  ', {limit: 'fsp'});
    console.log(`my choice: ${choice}`)
    if (choice === 'f') {
        character = cat;
        break;
    } else if (choice === 's') {
        character = dragon;
        break;
    } else if (choice === 'p') {
        character = pbj;
        break;
    } else {
        console.log(`Invalid input. Be better!`);
    }
}
console.log(character)
character.name = name;

console.log(`I'm covered in ${character.skin}!!!!!!`);
// wait(1000);
console.log(`I... I... I think I might be a... ${character.type.toUpperCase()}!!!!!`);
// wait(1000);
console.log(``);

while (isAlive && !hasWon) {

}


/*

*/