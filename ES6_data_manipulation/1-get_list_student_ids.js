export default function getListStudentIds(students_array) {
  if (!Array.isArray(students_array)) {
    return [];
  }
  return students_array.map((student) => student.id);
}
