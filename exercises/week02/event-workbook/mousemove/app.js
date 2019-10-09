
const box = document.querySelector(".red-box");

box.addEventListener("mousemove", function() {
    box.textContent = `X = ${event.clientX} Y = ${event.clientY}`
});
