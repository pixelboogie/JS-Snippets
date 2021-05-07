function solution(str, ending){

    // return str.endsWith(ending); // works

    // return str.slice(-1 * ending.length) === ending; // works

    return str.substr(str.length - ending.length, ending.length) === ending; // works

  }



console.log(solution('abcde', 'cde'));// true)
console.log(solution('abcde', 'abc'));// false)

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/
