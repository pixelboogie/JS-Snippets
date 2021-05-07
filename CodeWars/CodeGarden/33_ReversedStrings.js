function solution(str){
  
// store reversed string
    //init to the emply string
    let reversedString = '';

// iterate ove the string in reverse
for (let i = str.length -1; i>=0; i--){

    // store the current letter in var
    const letter = str[i];
    // append letter to reversed string
    reversedString += letter;
}



return reversedString;

}



// console.log((solution('world'), 'dlrow'));
console.log(solution('12345'));



