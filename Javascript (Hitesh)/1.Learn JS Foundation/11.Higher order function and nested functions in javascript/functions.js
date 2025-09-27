/* 
4. Write a function named `processTeaOrder` that takes
another function, `makeTea`, as a parameter and calls it
with the argument `"early grey"`.
Return the result of calling `makeTea`.
*/

function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea};`;
}

function processTeaOrder(teaFunction) {
  return teaFunction('early grey');
}

let order = processTeaOrder(makeTea);
console.log(order);

/*
5. Write a function named `createTeaMaker` that returns
another function. The returned function should take one
parameter, `teaType` and return a mesage like `"Making
green tea"`.
Store the returned function in a variable named
`teaMaker` and cal it with `"green tea"`.
*/

// function createTeaMaker() {
//   return function (teaType) {
//     return `Making ${teaType}`;
//   };
// }

// let teaMaker = createTeaMaker();
// let result = teaMaker('green tea');
// console.log(result);

function createTeaMaker(name) {
  let score = 100;
  return function (teaType) {
    return `Making ${teaType} ${name} ${score}`;
  };
}

let teaMaker = createTeaMaker('hitesh');
let result = teaMaker('green tea');
console.log(result);
