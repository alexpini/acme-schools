const studentCount = (schools, students)=> {
  return students.filter(student => student.schoolId === schools.id).length;
}

//mostPopular

// const mostPopular = () => schools.map( school => {
//   const arr = students.filter(student => student.schoolId === schools.id).sort((a, b) => a - b);
//   return arr.slice(-1)[0];
// });

// const mostPopular = () => schools.map( school => {
//   const studentCount = (schools, students) => {
//     students.filter(student => student.schoolId === schools.id).length
//   }
//   return Math.max(studentCount);
// });

//topSchool

// const topSchool = () => schools.map (schools, students) => {
//   const gpaArray = students.filter(student => student.schoolId === schools.id).reduce((acc, _student) => acc + _student.gpa, 0);
//   return gpaArray/gpaArray.length
// }





export { studentCount }
