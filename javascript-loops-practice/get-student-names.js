/* exported getStudentNames */
function getStudentNames(students) {
  var values = [];
  for (let i = 0; i < students.length; i++) {
    values.push(students[i].name);
  }
  return values;
}
