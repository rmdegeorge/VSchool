// make the box disapear when the user clicks it
const box = document.getElementsByClassName("red-box");

box[0].addEventListener("click", function() {
    box[0].style.backgroundColor = "transparent";
    console.log("you clicked");
});