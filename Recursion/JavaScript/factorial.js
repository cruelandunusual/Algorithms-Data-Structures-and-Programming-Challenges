/*
This example calculates the factorial of N, both recursively and in a standard iterative algorithm.

Usage:
    > node factorial.js <number>
    e.g.
    > node factorial.js 5
*/


function showError() {
    console.error('Please provide a valid integer between 0 and 999.');
}

// Iterative version of factorial algorithm
function factorialIter(n) {
    if (n == 0) {
        return n;
    }
    else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}


// Recursive version of factorial algorithm
function factorial(n) {
    if (n <= 1) {
        // base case
        return n;
    }
    else {
        // recursive case
        return n * factorial(n - 1);
    }
}


try {
    const arg = parseInt(process.argv[2], 10); // Convert the argument to an integer
    if (isNaN(arg) || arg < 0 || arg > 999) { // Check if arg is a valid int and within range
        showError();
        process.exit(1);
    }
} catch (error) {
    showError();
    process.exit(1);
} 

console.log(`iterative calculation for factorial(${process.argv[2]}) = ${factorialIter(process.argv[2])}`);
console.log(`recursive calculation for factorial(${process.argv[2]}) = ${factorial(process.argv[2])}`);


