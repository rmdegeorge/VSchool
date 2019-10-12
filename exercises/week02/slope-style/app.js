console.log(`\n\n~~~~~~~~~~~~~~GREEN~~~~~~~~~~~~~~~~~\n`);

function collectAnimals(...animals) {  
    return animals;
};
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
    return {fruit,sweets,vegetables};
};

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));

const vacation = {  
    location: "Burly, Idaho",
    duration: "2 weeks"
  };
  
function parseSentence(){
    const {location, duration} = vacation;
    return `We're going to have a good time in ${location} for ${duration}`;
};
console.log(parseSentence());


itemsArray = ['item 1', 'item 2', 'itme3'];
function returnFirst(items){
    const [firstItem] = items;
    return firstItem;
};
console.log(returnFirst(itemsArray));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
function returnFavorites(arr){
    const [firstFav,secondFav,thirdFav] = favoriteActivities;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}
console.log(returnFavorites(favoriteActivities));


//--------------------------------------
console.log(`\n\n~~~~~~~~~~~~~~~BLUE~~~~~~~~~~~~~~~~~\n`);
function combineAnimals(...animals) {  
    let newArray = [];
    for (let i=0; i<animals.length; i++) {
        newArray = [...newArray, ...animals[i]]
    }
    return newArray;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//---------------------------------------
console.log(`\n\n~~~~~~~~~~~~~~BLACK~~~~~~~~~~~~~~~~~\n`);

function product(...inputs) {  
    const numbers = [...inputs];
    return numbers.reduce((acc, number) => {
        return acc * number;
    }, 1)
}
console.log(product(2,3,2,2));
//'''''''''''''''''''''''''''''''''''''''
function unshift(array, ...inputs) {  
    return [...inputs].concat(array);
}

//''''''''''''''''''''''''''''''''''''''

console.log(`\n\n~~~~~~~~~~~DOUBLE BLACK~~~~~~~~~~~~~\n`);

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]