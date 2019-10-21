window.localStorage.setItem('name', 'Annie');
let myVar = localStorage.getItem('name');
console.log(myVar);
localStorage.removeItem("name");


// for putting objects and arrays in local storage
const user = {
    userName: "Jeremy",
    password: "12345bagel"
};
const jsonifiedUser = JSON.stringify(user);
localStorage.user = jsonifiedUser;

//for getting objects and arrays from local storage
const deJsonifiedUser = JSON.parse(localStorage.user);

console.log(localStorage.user);
console.log(deJsonifiedUser);