// Write a program to sum all elements of an array of numbers and print the result

let numbers = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(i = 0; i < numbers.length; i++){
    sum+=numbers[i];
}

console.log(sum);