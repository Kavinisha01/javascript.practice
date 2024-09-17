// Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.

function calculateFactorial(n){
    let factorial = 1;
    let i = 1;
    while(i <= n){
        factorial *= i;
        i++;
    }
    return factorial;
}
let result = calculateFactorial(5);
console.log(result);