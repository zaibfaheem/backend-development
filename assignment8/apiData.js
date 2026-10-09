// Question 3 - Employee Data from an API
const employeeData = [{name:'Ali', department:'IT', salary:80000},
{name:'Sara', department:'HR', salary:70000}, {name:'Ahmed', department:'IT', salary:95000}, {name:'Ayesha',
department:'Finance', salary:85000}];

// employees who belong to the IT department.
const itEmplyee = employeeData.filter((employee) => employee.department === "IT");
console.log(itEmplyee);

// the first employee whose salary is greater than 90000.
const highestSalary = employeeData.find((value) => value.salary > 90000);
console.log(highestSalary);

// Create a new list containing only the employee names.
let employeeNames = employeeData.map((employee) => employee.name);
console.log(employeeNames);

// total salary of all employees
let totalSalary = employeeData.reduce(function(total, employee){
    return total + employee.salary;
},0); console.log(totalSalary);