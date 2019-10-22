const array = ["this", "is", "an", "array", "bob", "bill"];

function combined(array) {
    let longest = 0;
    let length =0;
    for (let i = 0; i < array.length-2; i++) {
        length = `${array[i]}${array[i+1]}${array[i+2]}`.length
        if (longest < length) {
            longest = length;
        }
    }
    return longest;
}

console.log(combined(array));
