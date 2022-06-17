// let change = [
//     ["Dollars", 100],
//     ["Quarters", 25],
//     ["Dimes", 10],
//     ["Nickels", 5],
//     ["Pennies", 1]
//];


let div = document.getElementById("amount-output");
let divCounter = document.getElementsByClassName("counter");
// let sAmt = parseInt(document.getElementById("amount_due").value);
// let tAmt = parseInt(document.getElementById("amount_received").value);
// saleAmt = document.getElementById("sale_amount").value;
// tenderedAmt = document.getElementById("amount_received").value;
let coinReturn = {};
const coinTypes = ["Dollars", "Quarters", "Dimes", "Nickels", "Pennies"]
const coinValues = [01, .25, .10, .05, .01]

function calculateChange(saleAmt, tenderedAmt) {





    let returnAmt = tenderedAmt - saleAmt;

    let amount;

    for (let i = 0; i <= coinValues.length; i++) {
        amount = Math.floor(returnAmt / [coinValues[i]])
        coinReturn[coinTypes[i]] = amount;
        returnAmt = returnAmt % [coinValues[i]];
        if (amount > 0) {
            coinReturn[coinTypes[i]] = amount;
            returnAmt = returnAmt % [coinValues[i]];

        }
    }



}




// //console.log(calculateChange(saleAmt, tenderedAmt));


// // console.log(calculateChange(501, 1000));









let button = document.getElementById("calculate-change");

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
button.onclick = function handleClickEvent() {

    let saleAmt = parseFloat(document.getElementById("amount-due").value);
    let tenderedAmt = parseFloat(document.getElementById("amount-received").value);
    calculateChange(saleAmt, tenderedAmt);

    if (!saleAmt || isNaN(saleAmt)) {
        document.getElementById("output").innerHTML = "";
    } else {
        document.getElementById("dollars-output").innerHTML = coinReturn.Dollars;
        document.getElementById("quarters-output").innerHTML = coinReturn.Quarters;
        document.getElementById("dimes-output").innerHTML = coinReturn.Dimes;
        document.getElementById("nickels-output").innerHTML = coinReturn.Nickels;
        document.getElementById("pennies-output").innerHTML = coinReturn.Pennies;

    }


}