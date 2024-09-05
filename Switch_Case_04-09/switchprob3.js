// If the age is less than 5, the ticket is free (print "Free").
// If the age is between 5 and 12, the ticket price is $10 (print "10").
// If the age is between 13 and 64, the ticket price is $20 (print "20").
// If the age is 65 or older, the ticket price is $15 (print"15").

let age = 5;
switch (true){
    case age < 5:
        console.log("Free");
        break;

    case age >= 5 && age <= 12:
        console.log("10");
        break;
        
    case age >= 13 && age <= 64:
        console.log("20");
        break;
        
    case age >= 65:
        console.log("15");
        break;
        
    default:
        console.log("Invalid");
        break;

}

console.log("Thank you for booking");