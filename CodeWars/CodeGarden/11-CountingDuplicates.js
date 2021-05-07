function duplicateCount(text) {
    // place to store the count
    let counts = {};

    // place to stoer number of duplicates, init 0
    let dups = 0;

    // iterate over each letter of the text
    for (let i = 0; i < text.length; i++) {
        // toLowerCase the letter
        const letter = text[i].toLowerCase();
        // if the counts has not seen this letter
        if (!counts[letter]) {
            counts[letter] = 0; // set that count to be 0
        }

        // increment the count this letter
        counts[letter]++;

        console.log(counts);

    }

    for (const letter in counts) {
        if(counts[letter] > 1){
            dups++;   
        };        
    }
    return dups;
}

//   console.log(duplicateCount("")); // 0);
//   console.log(duplicateCount("abcde")); // 0);
console.log(duplicateCount("aabbcde")); // 2);
//   console.log(duplicateCount("aabBcde")); // 2,"should ignore case");
//   console.log(duplicateCount("Indivisibility")); // 1)
//   console.log(duplicateCount("Indivisibilities")); // 2, "characters may not be adjacent")


/*

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

*/

