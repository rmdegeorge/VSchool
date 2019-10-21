const readline = require("readline-sync");

/****************************************************************** 
 * GLOBAL VARIABLES
 ******************************************************************/
const enemies = ['Goomba', 'Koopa Troopa'];
let isAlive = true;
let hasWon = false;
let myCharacter;
let charSelect;
let starAcquireTime;
let name;

/****************************************************************** 
 * INTRO
 ******************************************************************/
name = readline.question('What is your name? ');
while (charSelect != 'm' && charSelect != 'l') {
    charSelect = readline.keyIn('Would you like to play as Mario (m) or Luigi (l)?', {limit: 'ml', hideEchoBack: true, mask: ""});
    if (charSelect === 'm') {
        myCharacter = new Character(`Mario ${name}`);
        break;
    } else if (charSelect === 'l') {
        myCharacter = new Character(`Luigi ${name}`);
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
    if (starAcquireTime !== undefined) {
        removeStarIfExpired(starAcquireTime)
    };
    if (myCharacter.lives < 0) {
        isAlive = false;
        console.log(`That was ${myCharacter.name}'s last life.`)
        console.log(`\n\nGAMEOVER\n\n\n`)
    };
};

/****************************************************************** 
 * FUNCTIONS 
 ******************************************************************/


function takeHit() {
    if (checkForPowerUp('Magic Mushroom')) {
        console.log(`${myCharacter.name} loses his Magic Mushroom.`);
        myCharacter.powerUps[1] = '              ';
    } else {
        console.log(`${myCharacter.name} loses one life.`);
        myCharacter.lives--;
    };
};
function enemyEncounter() {
    let enemy = getRandEnemy();
    console.log(`\n\nThere's a ${enemy}!\n\n`);
    let action = readline.keyIn(`\n\n(a) Attack it\n(j) Jump over it\n(w) Keep walking\n\n`, {limit: 'ajw', hideEchoBack: true, mask: ""})
    if (action === 'a') {
        tryToAttack();
    } else if (action === 'j') {
        tryToEvade();
    } else if (action === 'w') {
        walkIntoEnemy();
    };
};
function tryToAttack() {
    console.log(`\n\n${myCharacter.name} tries an attack by jumping on its head!\n\n`);
    let randNum = Math.floor(Math.random() * 100);
    if (checkForPowerUp('Super Star')) {
        console.log(`${myCharacter.name} killed it immediately because of his Super Star!`);
    } else if (randNum < 75) {
        console.log(`${myCharacter.name}'s attack was successful!`);
    } else {
        takeHit();
    };
};
function tryToEvade() {
    console.log(`\n\n${myCharacter.name} tries to evade the enemy by jumping\n\n`);
    let randNum = Math.floor(Math.random() * 100)
    if (randNum < 75) {
        console.log(`${myCharacter.name} uses his superior plumber jumping abilities to get away.`);
    } else {
        if (checkForPowerUp('Super Star')) {
            console.log(`${myCharacter.name} ran into the enemy, but killed it immediately because of his Super Star!`);
        } else {
            console.log(`${myCharacter.name} didn't get away and took a hit.`);
            takeHit();
        };
    };
};
function walkIntoEnemy() {
    //walk right into enemy
    if (checkForPowerUp('Super Star')) {
        console.log(`${myCharacter.name} killed it immediately because of his Super Star!`);
    } else {
        console.log(`\n\n${myCharacter.name} is a Dummy.  He walked right into it\n\n`);
        takeHit();
    };
};
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
function addItemToCharacter(newItem) {
    if (newItem === 'Coin') {
        //+1 to myCharacter.coins
        //if 100+ coins trade 100 coins for +1 1-UP
        myCharacter.coins += 5;
        if (myCharacter.coins >= 100) {
            myCharacter.coins -= 100;
            myCharacter.lives++;
            console.log(`You got 1-UP for collecting 100 Coins!`)
        };
    } else if (newItem === '1-UP') {
        //+1 to myCharacter.lives
        myCharacter.lives++;
    } else {
        //check character's powerups to see if character already has new item  
        let isFound = checkForPowerUp(newItem);
        if (isFound === undefined) {
            //add new if not there yet else 
            if (newItem === 'Magic Mushroom') {
                myCharacter.powerUps[0] = newItem;
            } else if (newItem === 'Super Star') {
                myCharacter.powerUps[1] = newItem;
                starAcquireTime = new Date().getTime();
            };
        }
    };
};
function checkForPowerUp(newItem) {
    return myCharacter.powerUps.find((item) => {
        return item === newItem;
    });
};
function boxEncounter() {
    console.log('\n\nTHERES A BOX!\n\n');
    let action = readline.keyIn(`\n\n(b) Break box\n(w) Keep walking\n\n`, {limit: 'bw', hideEchoBack: true, mask: ""});
    if (action === 'b') {
        console.log(`\n\nYou jump up and break the box\n\n`);
        let newItem = getRandItem()
        console.log(`You got a ${newItem}!`);
        addItemToCharacter(newItem);
    } else if (action === 'w'){
        console.log(`\n\n${myCharacter.name} is a minimalist. Who really needs all that loot anyways?\n\n`);
    };
};
function removeStarIfExpired(starAcquireTime) {
    if (checkForPowerUp('Super Star') === 'Super Star') {
        //there is a super star
        //check if time is expired
        let now = new Date().getTime()
        if (now > starAcquireTime + 30000) {
            //if Super Star time expired 
            console.log(`\n\n${myCharacter.name}'s Super Star Power Up has expired.\n\n`)
            myCharacter.powerUps[1] = '          ';
            //> remove super star;
        };
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
    console.log(`\n\n${myCharacter.name}'s Status:\n\nLives: ${myCharacter.lives}\nCoins: ${myCharacter.coins}\nPowerUps: ${myCharacter.powerUps.join(' ')}\n\n\n`)
    //console.log(sprintf("  0 Padded => %010.f", 123.4567));
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
