// Number
let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

// boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined
let firstname;
console.log(firstname);

let lastname = null;
let age = undefined;
console.log(firstname);
console.log(age);

// string
let myString = 'hello';
let myStringOne = 'Hola';
let username = 'hitesh';

// let oldGreet = myString + ' hitesh';
let oldGreet = myString + ' ' + 'hitesh';
console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
console.log(greetMessage);
console.log(demoOne);

// symbol
let sm1 = Symbol('hitesh');
let sm2 = Symbol('hitesh');

console.log(sm1 == sm2);
