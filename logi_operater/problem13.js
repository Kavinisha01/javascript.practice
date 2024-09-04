let items = 5;
let amount = 100;
let discount = 20;

if (items>5 || amount>=100){
    let discountPrice = (items*discount)/100;
    let finalPrice = amount-discountPrice;
    console.log("Discount Applicable");
}

else {console.log("Not applicable")}