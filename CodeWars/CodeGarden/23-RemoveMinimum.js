function removeSmallest(numbers) 
{
    // store answer in array
    let answers = [];

    // index of smallest
    let smallestIndex = 0;
    // the smallest number
    let smallestNum = 0; 

    // assume first
    smallestNum = numbers[0];

    // iterate through array
    for(let i=0; i<numbers.length; i++)
    {
        // if value at the current index is < than smallestNum
        if(numbers[i] < smallestNum)
        {
        // set smallest num to the current index value
            smallestNum = numbers[i];

        // set smallestIndex to the current index
            smallestIndex = i;
        }
    }

    // add all items to the answers array except for the smallest index;
    for(let j=0; j<numbers.length; j++)
    {
        if(j != smallestIndex)
        {
        answers.push(numbers[j]);
        }
    }

    return answers;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
// console.log(removeSmallest([]));




/*

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/
