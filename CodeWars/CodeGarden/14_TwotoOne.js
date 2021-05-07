function longest(s1, s2) {
// get all unique letters from both s1 s2

const uniqueLetters = {};
// place to store unique letters
// iterate over s1, for each letter
    for (let i=0; i < s1.length; i++){
        // if we have not seen this letter, add it to unique letter
        const currentLetter = s1[i];
        uniqueLetters [currentLetter] = true;
    }
        for (let i=0; i < s2.length; i++){
            const currentLetter = s2[i];
            uniqueLetters [currentLetter] = true;
        }
        
// sort the unique letters
// get all of the keys from the unique letters
    // built in sort to sort the keys
// return the unique letters sorted

return uniqueLetters;

}
console.log(longest("aretheyhere", "yestheyarehere"));
// console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
// cnsole.log(longest("inmanylanguages", "theresapairoffunctions"));