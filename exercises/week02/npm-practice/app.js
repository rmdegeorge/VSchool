const readline = require("readline-sync");

//{cancel: 'In after $<lastItem>'}


let search = ['floor', 'left wall', 'back wall', 'right wall', 'front wall'];
console.log(`Where would you like to search? `);
searchIndex = readline.keyInSelect(search, null, {cancel: false});

