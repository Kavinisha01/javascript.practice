// Problem solving assessment
let a = 10;
let b = 5;
let addition = a+b;
console.log("Addition = "+addition);

a = 10;
b = 5;
let subtraction = a-b;
console.log("Subtraction = "+subtraction);

a = 10;
b = 5;
let multiplication = a*b;
console.log("Multiplication = "+multiplication);

a = 10;
b = 5;
let division = a/b;
console.log("Division = "+division);

a = 10;
b = 5;
let remainder = a%b;
console.log("Remainder = "+remainder);

a = 10;
b = 5;
let exponentiation = a**b;
console.log("Exponentiation = "+exponentiation);

// Calculate the Rate of Interest:

let principal = 12500;
let amount = 15500;
let numOfYears = 4;
let SI = amount-principal;
let rateOfInterest = (SI * 100) / (principal * numOfYears);
console.log("Rate of Interest = "+rateOfInterest);

// Calculate Fuel Consumption for a Flight:

let fuelRate = 20;
let flightDurationHrs = 3;
let flightDurationMins = 30;
let totalFlightTimeInMins = (flightDurationHrs * 60) + flightDurationMins;
let totalFuelConsumed = fuelRate * totalFlightTimeInMins;
console.log("Total fuel consumed: " + totalFuelConsumed + " liters");

// Calculate the total time of a movie marathon including breaks:

let no_of_movies = 4;
let break_mins = 15;
let movie_runtime_in_hrs = 2;
let totalMovieTimeMins = no_of_movies * movie_runtime_in_hrs * 60;
let totalBreakTimeMins = (no_of_movies - 1) * break_mins;
let totalTimeMins = totalMovieTimeMins + totalBreakTimeMins;
let totalHours = Math.floor(totalTimeMins / 60);
let totalMinutes = totalTimeMins % 60;
console.log("Total time = "+  totalHours + "h " + totalMinutes + "m");
