function sortByLength (array) {

    // call the sort method on array
        // pass a comparision function
   array.sort((a,b) => {
            if (a.length > b.length){
                return 1;
            }
            if (a.length < b.length){
                return -1;
            }
            return 0;
    });


    return array;

  };

//   console.log(sortByLength(["Beg", "Life", "I", "To"])); //["I", "To", "Beg", "Life"]);
//   console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); //["", "Pizza", "Brains", "Moderately"]);
//   console.log(sortByLength(["Longer", "Longest", "Short"])); //["Short", "Longer", "Longest"]);


 // Return an array containing the same strings, ordered from shortest to longest

/*

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

