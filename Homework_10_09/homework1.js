// Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.
function sumNumbers(n){
    let i = 1;
    let sum = 0;

    while( i <= n){
        sum+=i; //sum=sum+i;
        i++;
    }
    return sum;
}

console.log(sumNumbers(5));

