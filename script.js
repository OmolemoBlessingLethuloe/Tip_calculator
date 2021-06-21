// get values
function calculateTip () {
    let billAmt = document.getElementById(billAmt).value;
    let serviceQual = document.getElementById(serviceQual).value;
    let numOfPeople = document.getElementById(peopleAmt).value;

// validate input
if (billAmt === '' || serviceQual == 0) {
    alert("Please enter value");
    return;
}
// check to see if number of people input is empty or less than or equal to 1
if (numOfPeople === 0 || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display="none";
} else {
    document.getElementById("each").style.display="block";
}
// calculate tip
let total = (billAmt * serviceQual) / numOfPeople;
// round off to 2 decimal places
total = Math.round(total * 100) / 100;
total = total.toFixed(2);
// display tip
document.getElementById("totalTip").style.display="block";
document.getElementById("tip").innerHTML=total;
// end of function 
}
// hide tip amount on load 
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";
// click to call the function 
document.getElementById("calculate").onclick=calculateTip();
