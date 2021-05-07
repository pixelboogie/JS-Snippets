function findEvenIndex(arr)
{

    const sumSubArray = (arr, start, end) => {
        let sum = 0;
        for (let index = start; index < end; index++) {
            sum += arr[index];
        }
        return sum;
    }


    // iterate over the array
    for (let i = 0; i < arr.length; i++) {
        const leftSum = sumSubArray(arr, 0, i);
        const rightSum = sumSubArray(arr, i+1, arr.length);
        if(leftSum == rightSum){
         return i;
        }
    }

    return -1;

}


// console.log(findEvenIndex([1,2,3,4,3,2,1])); //3, "The array was: [1,2,3,4,3,2,1] \n");
// console.log(findEvenIndex([1,100,50,-51,1,1])); //1, "The array was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1,2,3,4,5,6])); //-1, "The array was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20,10,30,10,10,15,35])); //3, "The array was: [20,10,30,10,10,15,35] \n");

/*

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

*/

