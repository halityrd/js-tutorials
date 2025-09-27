/*
#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log
*/

const specificId = students.find(function (banana) {
  return banana.id === 6;
});

const fruits = ["banana", "orange"];

const random = fruits.find(function (fruit) {
  return fruit === "orange";
});

console.log(random);
console.log(specificId);
