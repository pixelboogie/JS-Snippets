function narcissistic(value) {

        let sum = 0;
        let digits = value;
        let length = value.toString().length;

        while (digits > 0) {
            const digit = digits % 10;  // grab last digit of number
            sum += Math.pow(digit, length); 
            digits = Math.floor(digits/10); // remove that digit from the value
        }

        return sum == value;

  }
  
  console.log(narcissistic(153)); // true
//   console.log(narcissistic(1938)); // false
// console.log(narcissistic(7)); // true
// console.log(narcissistic(371)); // true
// console.log(narcissistic(23)); // false


