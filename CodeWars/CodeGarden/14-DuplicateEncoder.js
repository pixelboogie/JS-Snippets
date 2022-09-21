function duplicateEncode(word) {
    // a place to store whether or not letter is duplicate
    let isDuplicate = {};
    // place to store parens
    let parens = '';


    // iterate over the word
    for (let i = 0; i < word.length; i++) {
        // if we have seen this letter before, set to true
        const letter = word[i].toLowerCase();
        if (letter in isDuplicate) {
            isDuplicate[letter] = true;
            // else set to false
        } else {
            isDuplicate[letter] = false;
        }

    }

        // iterate over word
        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toLowerCase();
            // if letter is duplicate
            if (isDuplicate[letter]) {
                parens += ')';
            } else {
                parens += '(';
            }
        }
    
    console.log(parens);
    return parens;
}

// console.log(duplicateEncode("din")); //"(((");
// console.log(duplicateEncode("recede")); //"()()()");
    // console.log(duplicateEncode("Success")); //")())())","should ignore case");
    console.log(duplicateEncode("(( @")); //"))((");

/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/
