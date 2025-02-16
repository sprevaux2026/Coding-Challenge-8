// Task 1: Function Declaration - Employee Salary Calculation
//calulate the salary of an employee after tax deduction
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return netSalary;
}

// Test Data and logging
console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1).toFixed(2)}`);
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15).toFixed(2)}`);

// Task 2: Function Expression - Product Price After Discount
// calculate the final price of a product after discount
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return finalPrice;
};

// Data and logging
console.log(`Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`);
console.log(`Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`);

// Task 3: Arrow Function - Service Fee Calculation
// calculate the service fee based on the amount and service type
const calculateServiceFee = (amount, serviceType) => {
    let feeRate = 0;
    if (serviceType === "Premium") {
        feeRate = 0.15;
    } else if (serviceType === "Standard") {
        feeRate = 0.10;
    } else if (serviceType === "Basic") {
        feeRate = 0.05;
    }
    let fee = amount * feeRate;
    return fee;
};

// Data and logging
console.log(`Service Fee: $${calculateServiceFee(200, "Premium").toFixed(2)}`);
console.log(`Service Fee: $${calculateServiceFee(500, "Standard").toFixed(2)}`);
