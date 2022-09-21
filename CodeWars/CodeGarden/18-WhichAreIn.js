function inArray(array1, array2) {
    const results = [];
    array2.forEach(element => {
        const word = element;
        array1.forEach((ending, i) => {
            if (word.includes(ending)) {
                array1.splice(i, 1);
                results.push(ending);
            }
        })
    });


    return [...new Set(results)].sort();
}

function inArray(array1, array2) {
    return array1.filter(ending => {
        return array2.some(word => word.includes(ending));
    }).sort();
}




// let a1 = ["xyz", "live", "strong"]
a1 = ["live", "strong", "arp"]
// a1 = ["tarp", "mice", "bull"]

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1, a2)); //, ["live", "strong"])









/*

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs.

*/
