var flatten = function (array){
    
    // place to store flattened array
   let flattened = [];

    // iterate over the array
    for(let i=0; i<array.length; i++){
        // if the current value is an array
        const currentValue = array[i];
        if(Array.isArray(currentValue)){
            // iterate over the elements of the array and push into our flat
            for(let j=0; j<currentValue.length; j++){
                const innerValue = currentValue[j];
                flattened.push(innerValue);
            }
        }else{
        // if not
            // push value into array
            flattened.push(currentValue);
        }
    }
    return flattened;
  }



//   console.log(flatten([])); //[]);
//   console.log(flatten([1, 2, 3])); //[1, 2, 3]);
//   console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])); //[1, 2, 3, "a", "b", "c", 1, 2, 3]);
//   console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])); //[3, 4, 5, [9, 9, 9], "a,b,c"]);
  console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])); //[[3], [4], [5], 9, 9, 8, [1, 2, 3]]);

  /*

  Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]

*/

