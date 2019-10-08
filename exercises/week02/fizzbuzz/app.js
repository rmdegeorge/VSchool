function fizzbuzz() {
    const fizzbuzzArray = []
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            //divisible by both 3 & 5 --> fizzbuzz
            fizzbuzzArray.push("fizzbuzz");
        } else if (i % 5 === 0) {
            //divisible by 5 --> buzz
            fizzbuzzArray.push("buzz");
        } else if (i % 3 === 0) {
            //divisible by 3 --> fizz
            fizzbuzzArray.push("fizz");
        } else {
            fizzbuzzArray.push(i);
        };
    };
    return fizzbuzzArray;
};

function fizzbuzzTally(array) {
    let tally = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0
    };
    for (i = 0; i < array.length; i++) {
        if (array[i] === "fizzbuzz") {
            tally.fizzbuzz++;
        } else if (array[i] === "fizz") {
            tally.fizz++;
        } else if (array[i] === "buzz") {
            tally.buzz++;
        };
    }
    return tally;
};

console.log(fizzbuzzTally(fizzbuzz()));