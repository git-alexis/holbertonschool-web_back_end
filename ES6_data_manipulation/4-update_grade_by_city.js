export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  return studentsArray.filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      const studentCopy = { ...student };
      studentCopy.grade = grade.length ? grade[0].grade : 'N/A';
      return studentCopy;
    });
}
