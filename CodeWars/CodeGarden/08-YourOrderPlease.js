function order(words){

    // in case there aren't any words in
    if(!words) return '';

    // an array to store sorted
    const sortedWords = [];

    // split words on space
    const splitWords = words.split(' ');

    // iterate over words
    for (let i = 0; i < splitWords.length; i++) {
        const word = splitWords[i];
        let digit = +word.match(/\d/)[0];// matched a digit
        
        // find first digit
            // insert into sorted array in correct place
        sortedWords[digit - 1] = word;
    }

    // for debugging - shows the array with words in correct place
    for (let index = 0; index < sortedWords.length; index++) {
        console.log(sortedWords[index]);
    }

    // join the sorted words array on space
    return sortedWords.join(' ');
  }


console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order("")); // "", "empty input should return empty string" )


/*

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

*/

