export default function createEmployeesObject(departmentName, employees) {
  const employeesDepartment = {
    [departmentName]: employees
  };

  return employeesDepartment;
}
