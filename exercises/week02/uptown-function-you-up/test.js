const thisArray = [1,2,3,4,5,6];
// pull index 1
// send to temp variable
// assign index 2 to index 1
// assign temnp tto index 2

for (let i = 0; i < thisArray.length; i++) {
    let temp = thisArray.splice(i,1);
    thisArray.splice(i+2,1,temp);
}

console.log(`\n\nthisArray = ${thisArray.join()}\n\n`);

/*
This doesn't really work completely
*/
