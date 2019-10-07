const changeBGColor = (color) => box.style.backgroundColor = color;
const box = document.getElementById("box");
box.addEventListener("mouseover", (event) => {
    event.preventDefault();
    changeBGColor("blue");
});
box.addEventListener("mousedown", (event) => {
    event.preventDefault();
    changeBGColor("red");
});
box.addEventListener("mouseup", (event) => {
    event.preventDefault();
    changeBGColor("yellow");
});
box.addEventListener("dblclick", (event) => {
    event.preventDefault();
    changeBGColor("green");
});
document.addEventListener("scroll", (event) => {
    event.preventDefault();
    changeBGColor("orange");
});
document.addEventListener("keydown", function(event) {
    if (event.which == 66) {
        changeBGColor("blue");
    } else if (event.which == 82) {
        changeBGColor("red");
    } else if (event.which == 89) {
        changeBGColor("yellow");
    } else if (event.which == 71) {
        changeBGColor("green");
    } else if (event.which == 79) {
        changeBGColor("orange");
    }
});

/*
~~~~~~~~~~~~~INSTRUCTIONS~~~~~~~~~~~~~~~~~
    Blue when the mouse hovers over the square
    Red when the mouse button is held down over the square
    Yellow when the mouse button is let go over the square
    Green when the mouse is double clicked in the square
    Orange when the mouse scroll is used somewhere in the window (not just over the square).
*/