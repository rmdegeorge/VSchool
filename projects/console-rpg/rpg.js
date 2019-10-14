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

const characters = [pbj, cat, dragon];

function Enemy(name,hp,ap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const 

let isAlive = true;
let hasWon = false;

console.log("You awake dazed...........");
// wait(2000); 
console.log("Wait.... am I actually awake???  It feels like I'm dreaming... ");
// wait(4000);
console.log("Where am I??? ... and ... Who am I???");
// wait(2000);
let name = readline.question("What is your name?  ");
// wait(750);
console.log(`Thats right... I'm ${name}. `);
// wait(1500);
console.log("I don't quite feel like myself...");
// wait(1500);
console.log("Wait... is that... ");
// wait(1500);
console.log("OH MY GOD!!!! I'm covered in...")

const coveredIn = ['fur', 'scales', 'peanut butter',]
let index = readline.keyInSelect(coveredIn, 'What are you covered in?  ', {cancel: false});
let character = characters[index];
character.name = name;

console.log(`I'm covered in ${character.skin}!!!!!!`);
// wait(1000);
console.log(`I... I... I think I might be a... ${character.type.toUpperCase()}!!!!!`);
// wait(1000);
console.log(``);