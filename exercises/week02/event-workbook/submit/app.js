// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function


const form = document.getElementById("submit-me");
const nameInput = document.getElementById("first-name");
const ageInput = document.getElementById("age");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    event.preventDefault();
    
})