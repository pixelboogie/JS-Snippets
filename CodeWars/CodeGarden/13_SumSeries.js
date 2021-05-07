function SeriesSum(n) {
    // place to store sum
    let sum = 0;

    // store current demoniator
    let currentDenominator = 1;

    // iterate up to n
    for (let i = 0; i < n; i++) {

        // add 1 divide by the current demonator to the sum
        sum += 1 / currentDenominator;
        // increase the denomiator by 3
        currentDenominator += 3;

    }

        // return sum rounded to 2 places
        return sum.toFixed(2);

}

console.log(SeriesSum(4));
