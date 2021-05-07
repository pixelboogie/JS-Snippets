function solution(str){
    return [].reduce.call(str, (reversedString ,letter) =>{
        return letter + reversedString;
    }, '');

    
}



// console.log(solution('12345'));
console.log(solution('Shane'));

