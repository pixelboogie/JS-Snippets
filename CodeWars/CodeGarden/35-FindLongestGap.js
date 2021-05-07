function gap(num) {
    // convert to binary string
    const binaryString = num.toString(2);
    // place to store the length of overall longest segment
    let overallLongest = 0;

    // place to store length of current longes seqment 
    let currentLongest = 0;

    // iterate over binary string
    for (let i = 0; i < binaryString.length; i++) {
        const bit = binaryString[i];
        // if the current value is 1
        if (bit == 1) {
            // check if current longest seqment is greater than overall longest seqment 
            if (currentLongest > overallLongest) {
                overallLongest = currentLongest;
            }
            // reset current longest seqment to 0
            currentLongest = 0;
        } else {
            // the current value is 0
            // increment current longest seqment 
            currentLongest++;
        }

    }

    return overallLongest;
    // return the longest segment

}

console.log(gap(9)); // 2);
// console.log(gap(529)); // 4);
// console.log(gap(20)); // 1);
// console.log(gap(15)); // 0);


/*

A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of num.
For example:
9 has binary representation 1001 and contains a binary gap of length 2.
529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
20 has binary representation 10100 and contains one binary gap of length 1.
15 has binary representation 1111 and has 0 binary gaps.
Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
The function should return 0 if num doesn't contain a binary gap.

*/
