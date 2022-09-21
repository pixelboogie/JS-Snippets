function count (string) {  

  // object to store counts
  const counts = {};
  
  // iterate over letters
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    // if current letter is not a property in object
    // set to 0
    counts[letter] = counts[letter] || 0;
    // incrment the current letter by 1
    counts[letter] ++;
    
  }


     return counts;
  }


    
console.log(count("aba")); // { a: 2, b: 1 }); 
console.log(count("")); // {});    


/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

