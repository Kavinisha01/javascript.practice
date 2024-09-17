function generateSeries(n) {
    let str = "";
    for (i = 1; i <= n; i++) { // changed the operator
        let term = i ** 2; //Exponention added
        str += term +" "; // str added
    }
    return str;
}
let result = generateSeries(5);
console.log(result);

