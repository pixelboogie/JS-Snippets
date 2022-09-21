
function reverseString(input){
    return input.split('').reverse().join('');
}

function spinWords(string){
    let result = '';
    // split sentence on spaces
    const words = string.split(' ');
    // iterate over the words
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if(word.length >= 5){
            // the word length is >= 5, reverse those characters
            word = reverseString(word);
        }
        // add to result
        result += ' ' + word;
    }
        
    return  result.trim();
  }


// console.log(spinWords("Welcome")); // "emocleW");
console.log(spinWords("Hey fellow warriors")); // "Hey wollef sroirraw");
// console.log(spinWords("This is a test")); // "This is a test");
// console.log(spinWords("This is another test")); // "This is rehtona test");
// console.log(spinWords("You are almost to the last test")); // "You are tsomla to the last test");
// console.log(spinWords("Just kidding there is still one more")); // "Just gniddik ereht is llits one more");
// console.log(spinWords("Seriously this is the last one")); // "ylsuoireS this is the last one");

/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
spinWords("This is a test") => "This is a test" 
spinWords("This is another test") => "This is rehtona test"

*/

