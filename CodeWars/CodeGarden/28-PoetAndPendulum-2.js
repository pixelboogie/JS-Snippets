function pendulum(values) {

    // sort the incoming values
    // requires comparison function because these are numbers
    values.sort((a,b) => a-b);

        // place to store the answer
        // fist value is the lowest
        const answerArray = [values[0]];

    // var to keep track left/right
    let right = true;

    // iterate over sorted values
    for(let i=1; i<values.length; i++)
    {
        const value = values[i];

        // if should go on right
        if(right)
        {
            // push into array
            answerArray.push(value);
            
        }else{
            // insert into begin of array
            answerArray.unshift(value);
        }
            
        // flip tracker variable
        right = !right;

    }

    return answerArray;
}



console.log(pendulum([4,10,9])); // [10,4,9])
// console.log(pendulum([8,7,10,3])); // [8,3,7,10])
// console.log(pendulum([6,6,8,5,10])); // [10,6,5,6,8])
// console.log(pendulum([9,4,6,4,10,5])); // [9,5,4,4,6,10])
// console.log(pendulum([4,6,8,7,5])); // [8,6,4,5,7])
// console.log(pendulum([10,5,6,10])); // [10,5,6,10])
// console.log(pendulum([11,12,12])); // [12,11,12])

/*

Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

The Smallest element of the list of integers , must come in center position of array/list.

The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

Array/list size is at least 3 .

In Even array size , The minimum element should be moved to (n-1)/2 index (considering that indexes start from 0)

Repetition of numbers in the array/list could occur , So (duplications are included when Arranging).


*/
