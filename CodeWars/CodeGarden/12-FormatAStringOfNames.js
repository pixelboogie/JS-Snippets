function list(names){
    // a place to store the sentance
    let sentence = '';

    // iterate over the names
    for (let i = 0; i < names.length; i++) {
        // const element = names[i];
        // if the current index is the last index, append name and nothing after
        if(i == names.length-1){
            sentence += names[i].name;
        }else
        // if the current index is the 2nd last index, append the name and & 
        if(i == names.length-2){
            sentence += names[i].name + " & ";
        }else{
        // otherwise append the name with a comma
        sentence += names[i].name + ", ";
        }
    }
    
    return sentence

  }


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])); // 'Bart, Lisa, Maggie, Homer & Marge',
// "Must work with many names")
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])); // 'Bart, Lisa & Maggie',
// "Must work with many names")
// console.log(list([{name: 'Bart'},{name: 'Lisa'}])); // 'Bart & Lisa', 
// "Must work with two names")
// console.log(list([{name: 'Bart'}])); // 'Bart', "Wrong output for a single name")
// console.log(list([])); // '', "Must work with no names")


/*

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

*/

