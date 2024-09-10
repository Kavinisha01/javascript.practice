// 1: Parameter-less Function with No Return Type
// Write a function called greet that takes no parameters and simply logs "Hello, world!" to the console.
// - Call the function to see the output in the console.

function greet(){
    console.log("Hello, world!");
}

greet();

// 2: Parameter-less Function with a Return Type
// Create a function named getRandomNumber that takes no parameters and returns a random number between 0 and 1.
// - Call the function and store the result in a variable, then log that variable to the console.
// Hint: You can use JavaScript's built-in Math.random() function.

function getRandomNumber(){
    let num;
    num = Math.random();
    return num;
}

alert (getRandomNumber());

console.log(getRandomNumber());