function solution(str){
    let reversedString = '';
    [].forEach.call(str, (letter) =>{
        reversedString = letter + reversedString;
    });

    return reversedString;

}



// console.log(solution('12345'));
console.log(solution('Shane'));

