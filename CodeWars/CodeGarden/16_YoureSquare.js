var isSquare = function (n) {

    // iterate up to n
    for (let i = 0; i <= n; i++) {
         // square the current iteration value
         // if the result is equal to n
        if (i * i == n)
        {
            return true;
            // else return false
        }
            
    }
    return false;
}


console.log(isSquare(26));