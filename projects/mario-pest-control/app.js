const goombaKillCount = document.getElementById("goomba-kill-count");
const bobombKillCount = document.getElementById("bobomb-kill-count");
const cheepKillCount = document.getElementById("cheep-kill-count");

const goombaPaySubtotal = document.getElementById("goomba-pay");
const bobombPaySubtotal = document.getElementById("bobomb-pay");
const cheepPaySubtotal = document.getElementById("cheep-pay");

const goombaInput = document.getElementById("goomba-kill-input");
const bobombInput = document.getElementById("bobomb-kill-input");
const cheepInput = document.getElementById("cheep-kill-input");

const goombaButton = document.getElementById("goomba-kill-button");
const bobombButton = document.getElementById("bobomb-kill-button");
const cheepButton = document.getElementById("cheep-kill-button");

const totalPay = document.getElementById("total")

const goombaPay = 5;
const bobombPay = 7;
const cheepPay = 11;

let goombaKills = 0;
let bobombKills = 0;
let cheepKills = 0;

let goombaSubtotal = 0;
let bobombSubtotal = 0;
let cheepSubtotal = 0;


goombaButton.addEventListener("click", function() {
    goombaSubtotal += Number(goombaInput.value)*goombaPay;
    goombaKills += +goombaInput.value;
    goombaKillCount.textContent = goombaKills;
    goombaPaySubtotal.textContent = goombaSubtotal;
    totalPay.textContent = goombaSubtotal + bobombSubtotal + cheepSubtotal
});
bobombButton.addEventListener("click", function() {
    bobombSubtotal += Number(bobombInput.value)*bobombPay;
    bobombKills += +bobombInput.value;
    bobombKillCount.textContent = bobombKills;
    bobombPaySubtotal.textContent = bobombSubtotal;
    totalPay.textContent = goombaSubtotal + bobombSubtotal + cheepSubtotal
});
cheepButton.addEventListener("click", function() {
    cheepSubtotal += Number(cheepInput.value)*cheepPay;
    cheepKills += +cheepInput.value;
    cheepKillCount.textContent = cheepKills;
    cheepPaySubtotal.textContent = cheepSubtotal;
    totalPay.textContent = goombaSubtotal + bobombSubtotal + cheepSubtotal
});
