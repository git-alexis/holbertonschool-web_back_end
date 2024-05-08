export default function createEmployeesObject(departmentName, employees) {
  const employeesDepartment = {};
  employeesDepartment[departmentName] = employees;

  return employeesDepartment;
}
