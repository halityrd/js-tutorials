// Destructuring Swap Vriables
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

let first = 'bob';
let second = 'john';

// let temp = second;
// second = first;
// first = temp;

[second, first] = [first, second];

console.log(first, second);
