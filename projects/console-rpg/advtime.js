const readline = require("readline-sync");

const map = createMap(5, 20);


let isAlive = true;
let hasWon = false;
function Character(name, pic, x, y, inv = []) {
    this.name = name;
    this.pic = pic;
    this.loc = { x: x, y: y };
    this.inv = inv;
};

const finn = new Character('Finn', '| (• ◡•)|', 1, 4);
const jake = new Character('Jake', '(┛❍ᴥ❍ʋ)┛ ', 2, 2);
const lsp = new Character('Lumpy Space Princess', '꒰·⌢ ·꒱۶', 3, 5);
updateCharLoc(finn);
updateCharLoc(jake);
updateCharLoc(lsp);
console.log(map);

const tree = {name: 'Tree', pic:'  TREE   ', x: 5, y: 5}
// tree1 =                 '    /\   '
// tree2 =                 '   //\\  '
// tree3 =                 '    ||   '

// Finn =                   | (• ◡•)|   | (• ◡•)|   | (• O•)|
// Jake =                   (#ᵒᴥᵒ#)     (❍ᴥ❍ʋ)      (┛❍ᴥ❍ʋ)┛
// Lumpy Space Princess =   ٩꒰ ˘ ³˘꒱۶    ٩꒰´·⌢•｀꒱۶
// BMO =                    |[˚◡˚]|/

//  *=}¡™£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ“‘«æ…¬˚∆˙©ƒ∂ßå≈ç√∫˜µ≤≤≥≥÷¸˛Ç◊ı˜Â¯˘˘¿ÆÚÒÔÓ˝ÎÍ/* Œ„´‰ˇÁ¨∏”’»±—‚·°‡ﬂﬁ›‹€⁄` */====>}


// while (isAlive && !hasWon) {

// };


/* ~~~~~~~~~~~~~~~~~~~~~~~EXAMPLE OF A MAP DISPLAY~~~~~~~~~~~~~~~~~~~~~~~~~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -X- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    |      1    2    3    4    5    6    7    8    9   10   11   12   13   14   15  |
    |  1.  ME   *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  2.  *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  3.  *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  4.  *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  5.  *    *   ITEM  *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  6.  *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  7.  *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
-Y- |                                                                               |
    |  8.  *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  9.  *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  10. *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  11. *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  12. *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  13. *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  14. *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |                                                                               |
    |  15. *    *    *    *    *    *    *    *    *    *    *    *    *    *    *  |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
*/

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// A SIMPLE FUNCTION THAT WAITS A SPECIFIED TIME BEFORE CONTINUING
function wait(ms) {
    let start = new Date().getTime();
    let now = start;
    while (now < start + ms) {
        now = new Date().getTime();
    }
};
// CREATE EMPTY MAP
function createMap(sizeX, sizeY) {
    const mapArray = [];
    // Populate map with placeholders for empty locations
    for (let y = 0; y < sizeY; y++) {
        mapArray.push([]);
        for (let x = 0; x < sizeX; x++) {
            mapArray[y].push({'         '})  // change to object
        };
    };
    return mapArray;
};

function updateCharLoc(character) {
    //find 'ME'
    //replace 'ME' with placeholder '*'
    //put 'ME' at new location
    map[character.loc.y][character.loc.x] = character.pic;
}

function updateObjLoc(object) {
    map[object.loc.y][object.loc.x] = object.pic;
}