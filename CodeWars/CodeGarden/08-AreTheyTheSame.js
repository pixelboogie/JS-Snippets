function comp(array1, array2){

    let r1 = array1;
    let r2 = array2;

    if(!r1 || !r2 || r1.length != r2.length) return false;

    // create an object where the keys are the squared values and occurrances as the value???
    const squaredValues = array2.reduce((values, value) => {
        values[value] = values[value] || 0;
        values[value]++;
        return values;
  }, {});

    // iterate over the first array
    for (let i = 0; i < array1.length; i++) {
        const value = array1[i];
        const valueSqrd = value * value;
        // if the current value squared is not in the object
        if (!squaredValues[valueSqrd]) {
          return false;
        } else {
          squaredValues[valueSqrd]--;
        }
      }
    
      return true;
    }


    

 
const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1,a2));


/*

at 43

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

*/

