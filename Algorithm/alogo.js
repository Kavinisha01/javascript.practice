let a = 5;
let b = 4;
console.log(a,b);

let c=a;
a=b;
b=c;
console.log(a,b);

// Swapping variables using Arithmetic
x = 10;
y = 5;
console.log("X = " + x, "Y = "+ y);

x = x+y;
y = x-y;
x = x-y;
console.log("X = " + x, "Y = "+ y);

// Swapping variables using XOR

X = 10;
Y = 5;
console.log("X = " + X, "Y = "+ Y);

X = X^Y;
Y = Y^X;
X = X^Y;
console.log("X = " + X, "Y = "+ Y);