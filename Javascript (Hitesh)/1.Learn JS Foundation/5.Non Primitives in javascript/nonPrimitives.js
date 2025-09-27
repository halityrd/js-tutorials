let obj = {};

console.log(obj);
console.log(typeof obj);

// let username = {
//   firstname: 'hitesh',
//   isLoggedin: true,
// };

// console.log(username);
// console.log(typeof username);

// const username = {
//   firstname: 'hitesh',
//   isLoggedin: true,
// };

// username.firstname = 'Mr. H';
// username.lastname = 'choudhary';

// console.log(username.firstname);
// console.log(username.lastname);
// console.log(username);
// console.log(typeof username);

const username = {
  'first name': 'hitesh',
  isLoggedin: true,
};

username.lastname = 'choudhary';

console.log(username['first name']);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today.getDate());

// Array
let anotherUser = ['hitesh', true];
console.log(anotherUser[0]);

// type conversion
console.log('1' + 1);

let isValue = true;
console.log(isValue + 1);
console.log(Number(isValue) + 1);

let isValue2 = '2';
console.log(typeof Number(isValue2));

let isValue3 = '2abc';
console.log(typeof Number(isValue3));
