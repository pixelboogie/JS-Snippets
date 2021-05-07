function solution(pairs){
    // store the result
    let result = '';
    // iterate over the keys of object
    for(const key in pairs)
    {
        // append to the result
            // the current key = the value key at the current key, 
                // template string
        result += `${key} = ${pairs[key]},`;
    }

    return result.slice(0, -1);

  }

// object keys technique
  function solution(pairs){
    let result = '';
    Object.keys(pairs).forEach((key, i, keys) => {
        result += `${key} = ${pairs[key]}`;
        if(i !== keys.length - 1){
            result += ', ';
        }
    });

    return result;

  }

// reduce
function solution(pairs){
    return Object.keys(pairs)
        .reduce((result, key, i, keys) => {
            result += `${key} = ${pairs[key]}`;
            if(i !== keys.length - 1){
                result += ', ';
            }
        return result;
    }, '');
  }

  
  console.log(solution({a: 1, b: '2'}));


  /*

  Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

*/



