// Task 1: Function Declaration - Employee Salary Calculation
//calulate the salary of an employee after tax deduction
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return netSalary;
}

// Test Data and logging
console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1).toFixed(2)}`);
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15).toFixed(2)}`);
