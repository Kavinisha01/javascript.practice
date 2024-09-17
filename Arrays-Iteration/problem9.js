// Create an array of 10 numbers. Write a program to filter out only the odd numbers and print them

let oddNumbers = [1,2,3,4,5,6,7,8,9,10];
for(i = 0; i < oddNumbers.length; i++){
    if( i % 2 === 0){
    console.log(oddNumbers[i]);
    }
}