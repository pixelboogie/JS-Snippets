// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let myNum = num;
    let numString = String(myNum);
    let digitCount = numString.length;
    let persistence = 0;
  

    // as long as there are 2 or more
    while(digitCount >= 2){

        let tempNum = parseInt(numString[0]);// start storing the new num with the first digit
        // multiply each digit with the next
        for(let i=1; i<(digitCount); i++){
             tempNum = tempNum * parseInt(numString[i]);
            // console.log("tempNum: " + tempNum);
        }
        numString = String(tempNum);
        digitCount = numString.length;
       
        persistence++; // keep track of how many times
    }
    // console.log(digitCount);
    return persistence;

 }


//  console.log(persistence(113));
 console.log(persistence(999));