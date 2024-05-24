export default function getStudentIdsSum(studentsArray) {
  return studentsArray.reduce((accumulator, student) => accumulator + student.id, 0);
}
