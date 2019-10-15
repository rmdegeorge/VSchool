const readline = require("readline-sync");

function wait(ms) {
    let start = new Date().getTime();
    let now = start;
    while(now < start + ms) {
        now = new Date().getTime();
    }
}