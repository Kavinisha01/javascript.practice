let correctAnswer = "c";
let userAnswer = "";

do {
    console.log("What is the capital of France?");
    console.log("a) Berlin");
    console.log("b) Madrid");
    console.log("c) Paris");
    console.log("d) Rome");

    if (userAnswer != correctAnswer){
       console.log("Incorrect. Please try again");
    }


} while (correctAnswer);

console.log("Success");
