function vaporcode(string) {
  // create a new string to hold answer
  let answer = '';

  // iterate over the string
  // insert the Capital of each letter in string and 2 space to the new string
  for(let i=0; i<string.length; i++)
  {
    const letter = string[i];
    if(letter !== ' '){
    answer += letter.toUpperCase() + '  ';
    }
  }

  // trim the last 2 spaces
  return answer.trim();
}


function vaporcode(string) {
    return string
        .toUpperCase()
        .split('') // turn it into an array of characters
        .filter(letter => letter !== ' ')// filter remove the spaces
        .join('  '); // join it together with double spaces between each
  
  }
  



console.log(vaporcode("Let\'s go to the movies")); //"L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
// console.log(vaporcode("Why isn't my code working?")); //"W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");


/*

ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

 vaporcode("Lets go to the movies") // output => "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
  vaporcode("Why isn't my code working?") // output => "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"


*/
