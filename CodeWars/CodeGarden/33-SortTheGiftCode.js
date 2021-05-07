function sortGiftCode(code){
    
    // save it into an array
    // sort the array alphabetically
    // join it back to a string
    // return the string

    let myAnswer = '';
    let myArray = code.split('');
    myArray.sort();
    myAnswer = myArray.join('');

    return myAnswer;

  }


// console.log(sortGiftCode('abcdef')); // 'abcdef');
console.log(sortGiftCode('pqksuvy')); // 'kpqsuvy');
// console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba')); // 'abcdefghijklmnopqrstuvwxyz');


/*

Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples:
sortGiftCode( 'abcdef' ); //=> returns 'abcdef'
sortGiftCode( 'pqksuvy' ); //=> returns 'kpqsuvy'
sortGiftCode( 'zyxwvutsrqponmlkjihgfedcba' ); //=> returns 'abcdefghijklmnopqrstuvwxyz'

*/