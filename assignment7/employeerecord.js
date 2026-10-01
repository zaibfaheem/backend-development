const employee = {
    ID:1234,
    firstname:"awais",
    lastname:"khan",
    department:"sales",
    designation:"admin",
    salary:100000,
}
// dot noitatiion
console.log(employee.firstname  + employee.department);

// bracket notation
console.log(employee["designation"] + employee["salary"]);

// adding new property
employee.city = "lahore";

// changing value of one existing property
employee.salary = 120000;

// remove one property
delete employee.city;

// display object
console.log(employee);