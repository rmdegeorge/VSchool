/* This is the Constructor function version
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.speak = function() {
    console.log(`Hello, I am speaking`);
}
const rob = new Person('Rob',31);
const bill = new Person('Bill',40);

console.log(rob);
console.log(bill);
*/

/**This is the Class version */
// class Person {
//     constructor(name,age,likesDogs=false) { // parameters with default values must go at end of list so they are optional
//         this.name = name;
//         this.age = age;
//         this.likesDogs = likesDogs;
//     }
//     speak(phrase){
//         console.log(phrase);
//     }
//     doAThing(){
//         this.speak(`I, ${this.name}, am doing a thing`);
//     }
// }

// const jeremy = new Person('Jeremy',30);
// const rob = new Person('Rob', 31, true);

// console.log(jeremy);
// jeremy.speak();
// jeremy.doAThing();
// console.log(rob);
// rob.speak();
// rob.doAThing();

/**Extend a class */
/* 
class Vehicle {
    constructor(make,model) {
        this.make = make;
        this.model = model;
    }
    start(){
        console.log(`The engine of your ${this.make} ${this.model} is Running`)
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model,hasSideCar){
        super(make, model)
        this.hasSideCar = hasSideCar
    }
    popWheely(){
        console.log(`Your ${this.make} ${this.model} is driving on one wheel!`)
    }
}

const myVW = new Vehicle('Volkswagen','Jetta Sportwagen')
const moto = new Motorcycle('Vespa','P200E',true)

console.log(myVW);
myVW.start()

console.log(moto);
moto.start()
moto.popWheely()
*/

let total = 0;
const myInterval = setInterval(()=>{
    total++;
    console.log(`${total} Hello`);
    if (total === 10){
        clearInterval(myInterval);
    };
},1000);
