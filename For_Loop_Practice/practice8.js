// Print the first n multiples of 3 for if n = 5,  print 3 6 9 12 15 in separate line

function multiples(n){
    a = 3; 
    for(i = 1; i <= n; i++){ 
        console.log(a);
        a=a+3;
    }

}
multiples(10);

