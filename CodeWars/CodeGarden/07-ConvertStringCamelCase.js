function toCamelCase(str){


    // split string by dash or underscore
    const words = str.split(/-|_/g);
    let myCamelCase = words[0];

    // iterate over the split string
    for (let i = 1; i < words.length; i++) {
        
        // append the current word capitalized to the camelcase stirng
        myCamelCase += words[i][0].toUpperCase()+ words[i].slice(1);
    }
    // return the camelcase stirng
    return myCamelCase;
}



// console.log(toCamelCase('')); // '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// console.log(toCamelCase("A-B-C")); // "ABC", "toCamelCase('A-B-C') did not return correct value")
