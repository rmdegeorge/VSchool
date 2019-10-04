var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function doSomeThings(fruit,vegetables) {
    // 1. ~~~~~~~~~~~~~~~~~~~~
    vegetables.pop();

    console.log("vegetables: ", vegetables);
    
    //  2. ~~~~~~~~~~~~~~~~~~~~
    fruit.shift();

    console.log("fruit: ", fruit);
    
    //  3. ~~~~~~~~~~~~~~~~~~~~
    let orangeIndex = fruit.indexOf("orange");

    console.log("orangeIndex: ", orangeIndex);
    
    //  4. ~~~~~~~~~~~~~~~~~~~~
    fruit.push(orangeIndex);
    
    console.log("fruit: ", fruit);
    
    //  5. ~~~~~~~~~~~~~~~~~~~~
    let vegLength = vegetables.length;
    
    console.log("vegetables: ", vegetables);
    
    //  6. ~~~~~~~~~~~~~~~~~~~~
    vegetables.push(vegLength);
    
    console.log("vegetables: ", vegetables);
    
    //  7. ~~~~~~~~~~~~~~~~~~~~
    let food = fruit.concat(vegetables);
    
    console.log("food: ", food);
    
    //  8. ~~~~~~~~~~~~~~~~~~~~
    food.splice(4,2)
    
    console.log("food: ", food);
    
    //  9. ~~~~~~~~~~~~~~~~~~~~
    let reverseFood = []
    for (let i = food.length-1; i >= 0; i--) {
        reverseFood.push(food[i]);
    }
    
    console.log("reversFood: ", reverseFood);
    
    
    // 10. ~~~~~~~~~~~~~~~~~~~~
    return reverseFood.join(",");
    
    
}

console.log(`\n\n~~~~~~~~~~Final Result:~~~~~~~~~~\n\n${doSomeThings(fruit, vegetables)}\n\n`);

// ~~~~~~~~~~INSTRUCTIONS~~~~~~~~~~
/* 
//    1. Remove the last item from the vegetable array.
//    2. Remove the first item from the fruit array.
//    3. Find the index of "orange."
//    4. Add that number to the end of the fruit array.
//    5. Use the length property to find the length of the vegetable array.
//    6. Add that number to the end of the vegetable array.
//    7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
//    8. Remove 2 elements from your new array starting at index 4 with one method.
//    9. Reverse your array.
   10. Turn the array into a string and return it.
*/