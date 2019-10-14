function Car(year, make, model) {
    // use the 'this' keyword to reference each object
    // that is created from this constructor
    this.year = year;
    this.make = make;
    this.model = model;
}

// the we 'instantiate' (create a new object from) our constructor with the 'new' keyword and pass in the parameters.
var myTacoma = new Car(2015, 'Toyota', 'Tacoma');
var myMitsu = new Car(2001, 'Mitsubishi', 'Montero');
console.log(myTacoma)
console.log(myMitsu)