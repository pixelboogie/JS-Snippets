function solution(str){
     let reversedString = '';


for (let i = 0; i<=str.length-1; i++){
    const letter = str[i];
    reversedString = letter + reversedString;
}
return reversedString;

}


// console.log(solution('12345'));

console.log(solution('Shane'));

