// Weekend problem solving

// Calculate Simple Interest for a Loan

let P = 10000;
let R = 5;
let T = 3;
let SI = (P*R*T)/100;
console.log("Simple Interest = "+SI);

// Calculate the Area of a Garden

let r = 14;
let formula = 3.14159;
let area = formula*r**2;
console.log("Area of a garden = "+area);

// Swap the Price of Two Products(Arithmetic operation)

let priceA = 150;
let priceB = 200;
console.log("Price A = "+priceA, "Price B = "+priceB);

priceA = priceA+priceB;
priceB = priceA - priceB;
priceA = priceA - priceB;
console.log("Price A = "+priceA , "Price B = "+priceB);

// Calculate the Average Marks of a Student

let num1 = 85;
let num2 = 90;
let num3 = 95;
let average = (num1 + num2 + num3)/3;
console.log("Average = "+average);

// Calculate Compound Interest for an Investment

let principal = 5000;
let rateOfInt = 6;
let tenure = 4;
let CI = principal*(1+rateOfInt/100)^(tenure-principal); 
console.log("Compound Interest = "+CI);

// Determine Profit from Selling a Laptop

let cp = 800;
let sp = 950;
let profit = sp-cp;
console.log("Profit = "+profit);

// Calculate the Fencing Required for a Rectangular Field

let long = 50;
let wide = 30;
let perimeter = 2*(long+wide);
console.log("Perimeter = "+perimeter);

// Bitwise AND for Security Permissions

let x = 25;
let y = 19;
let and = x&y;
console.log("AND = "+and);

// Convert Celsius to Fahrenheit for Weather Reporting

let celsius = 22;
let Fahrenheit = (celsius*9/5)+32;
console.log("Fahrebheit = "+Fahrenheit);

// Calculate the Volume of a Water Tank

let radius = 5;
let height = 10;
let volumeFor = 3.14159;
let volume = volumeFor*radius**2*height;
console.log("Volume = "+volume);
