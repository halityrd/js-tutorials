/*
#### updatedStudents

1. add role:'student' property to each object
   using MAP method
2. assign to 'updatedStudents' variable and log
*/

// have access to students from data.js

const updatedStudents = students.map(function (student) {
  // console.log(student);
  student.role = "student";
  return student;
});

console.log(updatedStudents);
