/*
There are some candies that need to be distributed to some children as fairly as possible (i.e. the variance of result needs to be as small as possible), but I don't know how to distribute them, so I need your help. Your assignment is to write a function with signature distribute(m, n) in which m represents how many candies there are, while n represents how many children there are. The function should return a container which includes the number of candies each child gains.

Notice
The candy can't be divided into pieces.
The list's order doesn't matter.
Requirements
The case m < 0 is equivalent to m == 0.
If n <= 0 the function should return an empty container.
If there isn't enough candy to distribute, you should fill the corresponding number with 0.
*/

function distribute(m, n) {
    let candies = m;
    let children = n;
    let distribute = [];

    if (children <= 0) {
        return distribute;
    }

    // add 0s to each child to start out
    for (let i = 0; i < children; i++) {
        distribute.push(0);
    }

    if (candies <= 0) return distribute;



    while(candies > 0){
        // iterate up to num of children
        for (let j = 0; j < children; j++) {
            //increment the current value at the current index 
            distribute[j]++;

            // decriment the number of candies left, break
            candies--;
            if (candies === 0) break;

            // if we reach the end of the array and stil lhave candles left, do it again
        }
    }
    return distribute;
}

console.log(distribute(-5, 0));
console.log(distribute(0, 0));
console.log(distribute(5, 0));

console.log(distribute(-5, 10));
console.log(distribute(5, 10));
console.log(distribute(0, 10));
console.log(distribute(5, 10));
console.log(distribute(10, 10));
console.log(distribute(15, 10));