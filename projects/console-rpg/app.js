const readline = require("readline-sync");

/****************************************************************** 
 * GLOBAL VARIABLES
 ******************************************************************/
const enemies = ['Goomba', 'Koopa Troopa'];
let isAlive = true;
let hasWon = false;
let myCharacter
let charSelect

/****************************************************************** 
 * INTRO
 ******************************************************************/
while (charSelect != 'm' && charSelect != 'l') {
    charSelect = readline.keyIn('Would you like to play as Mario (m) or Luigi (l)?', {limit: 'ml', hideEchoBack: true, mask: ""});
    if (charSelect === 'm') {
        myCharacter = new Character('Mario');
        break;
    } else if (charSelect === 'l') {
        myCharacter = new Character('Luigi');
        break;
    };
};

/****************************************************************** 
 * Main Game loop
 ******************************************************************/
while (isAlive && !hasWon) {
    let answer = readline.keyIn(`\n\nWhat would you like to do?\n(w) Walk\n(v) View Character Status\n(q) Quit\n\n`, {limit: 'wvq', hideEchoBack: true, mask: ""});
    if (answer === 'w'){
        walk();
    } else if (answer === 'v') {
        checkCharacter();
    } else if(answer === 'q') {
        console.log(`\n\nGoodbye!\n\n`)
        break;
    };
};

/**
 * add life if find green mushroom
 * powerups: Super Mushroom, star,
 * coins - 100 coins trade in for extra life
 */


/****************************************************************** 
 * IN PROGRESS FUNCTIONS 
 ******************************************************************/
function walk() {
    //check for enemy (1:4 chance of enemy appearing)
    if (isThereABox()){
        boxEncounter();
    } else if (isThereAnEnemy()) {
        enemyEncounter();
    } else {
        console.log(`\n\nNothing exciting happened...\n\n`);
    };
};
function addItemToCharacter(item) {
    if (item === 'coin') {
        //+1 to myCharacter.coins
    } else if (item === '1-UP') {
        //+1 to myCharacter.lives
    } else {
        //check character's powerups for new item  
        //add new if not there yet else 
    };
};
function enemyEncounter() {
    let enemy = getRandEnemy();
    console.log(`\n\nThere's a ${enemy}!\n\n`);
    let action = readline.keyIn(`\n\n(a) Attack it\n(j) Jump over it\n(w) Keep walking\n\n`, {limit: 'ajw', hideEchoBack: true, mask: ""})
    if (action === 'a') {
        console.log(`\n\nYou attacked!\n\n`);
        //********attack
        //either get hit by enemy or kill enemy
    } else if (action === 'j') {
        console.log(`\n\nYou try to evade the enemy by jumping\n\n`);
        //************try to jump over enemy
        //either get away or get hit by enemy
    } else if (action === 'w') {
        console.log(`\n\nYou Dummy.  You jumped right into it\n\n`);
        //************walk right into enemy
        //get hit by enemy
    };
};

/****************************************************************** 
 * FUNCTIONAL FUNCTIONS 
 ******************************************************************/

 
function boxEncounter() {
    console.log('\n\nTHERES A BOX!\n\n');
    let action = readline.keyIn(`\n\n(b) Break box\n(w) Keep walking\n\n`, {limit: 'bw', hideEchoBack: true, mask: ""});
    if (action === 'b') {
        console.log(`\n\nYou jump up and break the box\n\n`);
        let newItem = getRandItem()
        console.log(`You got a ${newItem}!`);
        addItemToCharacter(newItem);
    } else if (action === 'w'){
        console.log(`\n\n${myCharacter} is a minimalist. Who reallyneeds all that loot anyways?\n\n`);
    };
};
function wait(ms) {
    let start = new Date().getTime();
    let now = start;
    while (now < start + ms) {
        now = new Date().getTime();
    }
};
function checkCharacter() {
    // SHOWS: Coins, Currnet Powerups, Number of lives
    console.log(`\n*******************************************\n**************${myCharacter.name}'s Status:**************\n**                                       **\n**  Lives: ${myCharacter.lives}                             **\n**  Coins: ${myCharacter.coins}                             **\n**  PowerUps: ${myCharacter.powerUps.join(' ')}  **\n**                                       **\n*******************************************\n*******************************************`)
};
function getRandEnemy() {
    /**
     * ENEMIES: Goomba:         50/100
     *          Koopa Troopa:   30/100
     *          Cheep Cheep:    20/100 */
    let randEnemy
    let randNum = Math.floor(Math.random() * 100);
    if (randNum < 50) {
        randEnemy = 'Goomba';
    } else if (50 <= randNum && randNum<80) {
        randEnemy = 'Koopa Troopa';
    } else if (80<=randNum && randNum<100) {
        randEnemy = 'Cheep Cheep';
    };
    return randEnemy
};
function isThereAnEnemy() {
    // true = there is a enemy  false = there is no enemy
    let randNum = Math.floor(Math.random() * 100);
    return((randNum < 25) ? true : false);
};
function isThereABox() {
    // true = there is a box  false = there is no box
    let randNum = Math.floor(Math.random() * 100);
    return((randNum < 25) ? true : false);
};
function getRandItem() {
    /** 
     * 1-UP:            5/100
     * Magic Mushroom:  10/100
     * Super Star:      5/100
     * Coin:            50/100
     */
    let randItem;
    let randNum = Math.floor(Math.random() * 100);
    if (0 <= randNum && randNum < 5) {
        // 1-UP
        randItem = '1-UP';
    } else if (5 <= randNum && randNum < 15) {
        // Magic Mushroom
        randItem = 'Magic Mushroom';
    } else if (15 <= randNum && randNum < 20) {
        // Super Star
        randItem = 'Super Star';
    } else {
        // Coin
        randItem = 'Coin';
    };
    return randItem;
};
function Character(name, powerUps = ['              ', '          '], coins = 0, lives = 3) {
    // Builds your character object
    this.name = name;
    this.powerUps = powerUps;
    this.coins = coins;
    this.lives = lives;
};
