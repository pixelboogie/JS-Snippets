function calculateYears(principal, interest, tax, desired) {

    let years = 0;
    let myPrincipal = principal;
    let interestRate = interest;
    let myTax = tax;
    let myDesired = desired;
    let gross = 0;
    let taxAmount = 0;
    let interestAmount = 0;

    while (myPrincipal < myDesired) {
        interestAmount = myPrincipal * interestRate; // find the interest amount
        gross = myPrincipal + interestAmount; // add interest
        taxAmount = interestAmount * myTax; // find taxes
        myPrincipal = gross - taxAmount; // subtract taxes
        years++;
    }

    return years;
}


// console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3)
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14)
console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0)