function reverseWords(str) {

    // place to store reversed word 
    let reversedStr = '';
    // place to note if we are iterating over word
    // a place to store indiv reversed word
    let reversedWord = '';
    // iterate over string 0 to end
    for (let i = 0; i < str.length; i++) {
        const character = str[i];
        // if current char is not space
        if (character !== ' ') {
            // prepend letter to indivReWord
            reversedWord = character + reversedWord;
            // else we saw a space
        } else {

            // append individ rev word to whole rev words // append the space char
            reversedStr += reversedWord + ' ';
            reversedWord = '';

            
        }
    }

    return reversedStr + reversedWord;

}


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
