// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// https://www.codewars.com/kata/mumbling/train/javascript
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    // a place to store the result
    let result = "";
    //iterate over sting
    for (let i = 0; i < s.length; i++) {
        // append the current letter i+1 times to the string
        for (let j = 0; j < i + 1; j++) {
            if (j == 0) {
                // ap the first append
                result += s[i].toUpperCase();
            } else {
                result += s[i].toLowerCase();
            }
        }
            // append a dash if it is not the last letter
            if (i != s.length-1) {
                result += '-';
            }
    }
        return result;
}

console.log(accum("cwAt"));

