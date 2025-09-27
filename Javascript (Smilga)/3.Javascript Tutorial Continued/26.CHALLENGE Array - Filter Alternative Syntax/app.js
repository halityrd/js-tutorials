/*
#### specificId

1. find specific id in array
2. assign to 'specificId' variable and log
*/

const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student; //  a value that coerces to true
  // }
  // if (student.score >= 80) return student;
  return student >= 80;
});

console.log(highScores);
