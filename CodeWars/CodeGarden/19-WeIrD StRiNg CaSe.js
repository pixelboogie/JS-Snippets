function toWeirdCase(string, isUpperCase = true){

    return string.split('').reduce((weirdCase, letter) => {
        if(letter !== ' '){
            if(isUpperCase){
                weirdCase += letter.toUpperCase();
            }else{
                weirdCase += letter.toLowerCase();
            }
            isUpperCase = !isUpperCase;
        }else{
            weirdCase += ' ';
            isUpperCase = true;
        }
        return weirdCase;

    }, '');

  }


  function toWeirdCase(string, isUpperCase = true){

    return string.split('').reduce((weirdCase, letter) => {
        if(letter !== ' '){
            if(isUpperCase){
                isUpperCase = !isUpperCase;
                return weirdCase += letter.toUpperCase();
            }else{
                isUpperCase = !isUpperCase;
                return weirdCase += letter.toLowerCase();
            }
        }else{
            isUpperCase = true;
            return weirdCase += ' ';
        }
    }, '');

  }


// console.log(toWeirdCase('This')); //  'ThIs');
console.log(toWeirdCase('is')); //  'Is');


  /*

  Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/

