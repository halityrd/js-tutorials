/*
#### survey

1. list favorite subjects with reduce
   {
   english: 1
   history: 1
   math: 3
   }
2. assign to survey and log
*/

const survey = students.reduce(function (survey, student) {
  // console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
