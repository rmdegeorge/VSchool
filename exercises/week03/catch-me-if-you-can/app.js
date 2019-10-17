function sum(x,y) {
    try{
        if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        } else {
            throw 'not a number'
        }
    } catch(err) {
        console.log(err);
    }
}
let x = 5;
let y = 'x';
console.log(`The sum of ${x} & ${y} is ${sum(x,y)}`);