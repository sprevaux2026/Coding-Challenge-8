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

// Task 4: Parameters and Arguments - Car Rental Cost Calculation
// calculate the total cost of renting a car based on days, car type, and insurance
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = 0;
    if (carType === "Economy") {
        dailyRate = 40;
    } else if (carType === "Standard") {
        dailyRate = 60;
    } else if (carType === "Luxury") {
        dailyRate = 100;
    }
    let cost = dailyRate * days;
    if (insurance) {
        cost += 20 * days;
    }
    return cost;
}

// Data and logging
console.log(`Total Rental Cost: $${calculateRentalCost(3, "Economy", true)}`);
console.log(`Total Rental Cost: $${calculateRentalCost(5, "Luxury", false)}`);

// Task 5: Returning Values - Loan Payment Calculation
// calculate the total payment for a loan based on principal, rate, and time
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time);
    return totalPayment;
}

// Data and logging
console.log(`Total Payment: $${calculateLoanPayment(1000, 0.05, 2).toFixed(2)}`);
console.log(`Total Payment: $${calculateLoanPayment(5000, 0.07, 3).toFixed(2)}`);

// Task 6: Higher-Order Functions - Identifying Large Transactions
// filter large transactions based on a threshold amount
let transactions = [200, 1500, 3200, 800, 2500];

function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

//  Data and logging
console.log("Filtered Transactions:", filterLargeTransactions(transactions, amount => amount > 1000));
