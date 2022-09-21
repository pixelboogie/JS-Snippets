function deleteNth(arr,n){

    let counts={ };
    
    let answerArr = [];
    
    for(let i=0; i<arr.length; i++){
        const num = arr[i];
      if(!counts[num] || counts[num] < n){
        answerArr.push(num);
        // set it to itself or initializing to 0
        counts[num] = counts[num] || 0; // allows us to incrment on next line, common solution
        counts[num]++; // increase count
      } // else do nothing
    }
    return answerArr;
  }

console.log(deleteNth([20,37,20,21], 1)); //  [20,37,21])
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)); //  [1, 1, 3, 3, 7, 2, 2, 2])