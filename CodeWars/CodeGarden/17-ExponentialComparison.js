function compare(number1, number2) {

    let [base1, exp1] = number1;
    let [base2, exp2] = number2;


    // numbers get too big for javascript, so use log10 technique
    const number1Raised = exp1 * Math.log10(base1);
    const number2Raised = exp2 * Math.log10(base2);

    // if num1 to pow of exp1 is < num2 to pow of exp2, return num2, else return num1
    return number1Raised < number2Raised ? number2 : number1;
  }



// console.log(compare([2,11],[3,7])); // [3,7]);
// console.log(compare([1,10],[2,3])); // [2,3]);
// console.log(compare([3,5],[5,3])); // [3,5]);
// console.log(compare([4,7],[3,8])); // [4,7]);
// console.log(compare([5, 1000],[6, 900])); // [6, 900]);
console.log(compare([15991,714883],[960290,502358])); // [960290,502358]);

/*

Comparing two numbers written in index form like 2^11 and 3^7 is not difficult, as any calculator would confirm that 2^11 = 2048 < 3^7 = 2187.

However, confirming that 632382^518061 > 519432^525806 would be much more difficult, as both numbers contain over three million digits.

Your task is to write a function that takes two arrays (or two tuples in Python) in the form of [base, exponent] where base and exponent are positive integers, and return the largest of the two pairs of numbers.
*/
