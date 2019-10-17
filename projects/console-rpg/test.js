const readline = require("readline-sync");


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

console.log(`The randomly generated enemy is a ${getRandEnemy()}`)