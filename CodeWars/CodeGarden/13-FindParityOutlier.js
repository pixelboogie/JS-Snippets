function findOutlier(integers){
    
    // keep track of number of odd num
    let oddCount = 0;

    // keep track of even nums
    let evenCount = 0;

    let lastEven;
    let lastOdd;

    for (let i = 0; i < integers.length; i++) {
        const currentVal = integers[i];
        if(currentVal % 2 == 0){
            lastEven = currentVal;
            evenCount++;
        }else{
            lastOdd = currentVal;
            oddCount++;
        }
        if(evenCount > 1 && oddCount == 1){
            return lastOdd;
        }else if(oddCount > 1 && evenCount == 1){
            return lastEven;
        }

    }
  }


  console.log(findOutlier([0, 1, 2])); // 1)
//   console.log(findOutlier([1, 2, 3])); // 2)
//   console.log(findOutlier([2,6,8,10,3])); // 3)
//   console.log(findOutlier([0,0,3,0,0])); // 3)
//   console.log(findOutlier([1,1,0,1,1])); // 0)

/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/

