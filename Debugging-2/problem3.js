let a = 5;
let b = 10;
let c = 3;

if( a > b || a < c) {
    console.log(a);
}

else if (b > a && b > c) { //change the operator
    console.log(b);
}
else {
    console.log(c);
}