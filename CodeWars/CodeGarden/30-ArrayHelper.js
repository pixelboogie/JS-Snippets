Array.prototype.square = function(){
    // place to store squared values
    const squared = [];
    // iterate over the array (this)
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        // square the current element
        const result = element * element;
        // insert the squared element into the suqared values array
        squared.push(result);
    }
    // return the squared values
    return squared;
}

Array.prototype.square = function(){
    return this.map(element => element * element);
};

Array.prototype.cube = function(){
    return this.map(element => element * element * element);
};

Array.prototype.sum = function(){
    // place to store summed value
    let sum = 0;
    // iterate over the array (this)
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        sum += element;
    }
    // return the summed values
    return sum;
};

Array.prototype.average = function(){
    let sum = 0; // store total
    let num = this.length; // store how many

    // iterate over the array (this)
    for (let i = 0; i < num; i++) {
        const element = this[i];
        sum += element;
    }
    // return sum divided by num
    return sum/num;
};

Array.prototype.even = function(){
    let evens = []; // store total
    let num = this.length; // store how many

    // iterate over the array (this)
    for (let i = 0; i < num; i++) {
        const element = this[i];
        if(element % 2 == 0){
            evens.push(element);
        }
    }
    // return even nums
    return evens;
};
Array.prototype.odd = function(){
    let odds = []; // store total
    let num = this.length; // store how many

    // iterate over the array (this)
    for (let i = 0; i < num; i++) {
        const element = this[i];
        if(element % 2 != 0){
            odds.push(element);
        }
    }
    // return even odds
    return odds;
};


// ----------------------

const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.square(), [1, 4, 9, 16, 25]);
// console.log(numbers.cube(), [1, 8, 27, 64, 125]);
// console.log(numbers.sum(), 15);
// console.log(numbers.average(), 3);
// console.log(numbers.even(), [2, 4]);
// console.log(numbers.odd(), [1, 3, 5]);






/*

This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
*/
