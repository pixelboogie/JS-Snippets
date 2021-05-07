function maps(x)
{
    // store doubled values
    const doubledArr = [];

    for(let i=0; i<x.length; i++)
    {
        // double the value and add to array
        doubledArr[i] = 2 * x[i];
    }

    return doubledArr; 
}


console.log(maps([4, 1, 1, 1, 4]));