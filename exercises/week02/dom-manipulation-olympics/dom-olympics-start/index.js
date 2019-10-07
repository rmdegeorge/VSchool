//~~~~~~~INSERT HEADER~~~~~~~
const header = document.getElementById("header");
header.innerHTML = "<h1>JavaScript Made This</h1><h2><span class='name'>Rob</span> wrote the JavaScript</h2>"

//~~~~~NEW MESSAGES~~~~~~~
const messages = document.querySelector(".messages");
messages.innerHTML = '<div class="message left">I have something fun and good to talk about</div><div class="message right">I would love to talk</div><div class="message left">You have to, I\'m a police officer</div><div class="message right">I\'m confused... I already said I would love to talk!</div>'


//~~~~~CLEAR BUTTON~~~~~~~
const clear = document.getElementById("clear-button");
clear.addEventListener("click", function(){
    messages.innerHTML = ''
});

//~~~~~CHANGE THEME~~~~~~~~
const messagesLeft = document.getElementsByClassName("message left");
const messagesRight = document.getElementsByClassName("message right");
const themeDropDown = document.getElementById("theme-drop-down");
themeDropDown.addEventListener("change", function() {
    if (themeDropDown.value === "theme-one") {
        for (let i = 0; i < messagesLeft.length; i++) {
            messagesLeft[i].style.backgroundColor = "lightblue";
            messagesLeft[i].style.color = "black";
            messagesLeft[i].style.boxShadow = "5px 5px rgb(121, 150, 160)";
        }
        for (let i = 0; i < messagesRight.length; i++) {
            messagesRight[i].style.backgroundColor = "burlywood";
            messagesRight[i].style.color = "black";
            messagesRight[i].style.boxShadow = "5px 5px rgb(131, 108, 78)";
        }
    } else if (themeDropDown.value === "theme-two") {
        for (let i = 0; i < messagesLeft.length; i++) {
            messagesLeft[i].style.backgroundColor = "red";
            messagesLeft[i].style.color = "black";
            messagesLeft[i].style.boxShadow = "5px 5px grey";
        }
        for (let i = 0; i < messagesRight.length; i++) {
            messagesRight[i].style.backgroundColor = "black";
            messagesRight[i].style.color = "white";
            messagesRight[i].style.boxShadow = "5px 5px grey";
        }
        
    }
});

//~~~~~ADD MORE MESSAGES WITH FORM~~~~~~~
let count = 0;
document.message.addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.message.input.value;
    const newMessage = document.createElement("div");
    newMessage.innerHTML = input;
    if (count % 2 === 0) {
        newMessage.className = "message left";
    } else {
        newMessage.className = "message right";
    }
    messages.appendChild(newMessage);
    count++;
})







/* 
~~~~~~~~
I should probably go through this code and clean it up. 
    pull functionality into their own functions, then simply call the functions
        for each event etc.
 */