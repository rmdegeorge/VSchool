const employees = [];
function Employee(name, jobTitle, salary, status = 'Full Time') {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
};
Employee.prototype.printEmployeeForm = function() {console.log(this)};
Employee.prototype.addToEmployees = function() {employees.push(this)};

bill = new Employee('Bill', 'Chef', '$18/hr');
joe = new Employee('Joe', 'Dishwasher', '$9/hr', 'Part-time');
ed = new Employee('Ed', 'Owner', '$75/hr');

bill.addToEmployees();
bill.printEmployeeForm();
joe.addToEmployees();
joe.printEmployeeForm();
ed.addToEmployees();
ed.printEmployeeForm();
console.log(employees);
