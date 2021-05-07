const binaryArrayToNumber = arr => {
  // place to store the sum
  let sum = 0;

  // iterate over the array
  for(let i=0; i<arr.length; i++)
  {
    const value = arr[i];
  // take 2 raised to the power arr.length - 1 - i
  // add to sum
    const power = arr.length - 1 - i;
    const powerOf2 = 2 ** power;
    sum += powerOf2 * value;

  }
  // return the sum
  return sum;
};


// console.log(binaryArrayToNumber([0,0,0,1]));


binaryArrayToNumber([0, 0, 0, 1]);
binaryArrayToNumber([0,0,1,0]);
binaryArrayToNumber([1,1,1,1]);
binaryArrayToNumber([0,1,1,0]);