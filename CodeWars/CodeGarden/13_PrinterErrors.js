
function printerError(s) {
    
    let charCount = 0;
    let errorCount = 0;

    charCount = s.length;

    for(let i=0; i<=charCount-1; i++)
    {
        const currentLetter = s[i];

        // js automatically converts for the comparison
        if(currentLetter > 'm')
        {
        // add 1 to errorCount;
        errorCount++;
        }

    }

    // return the number of errors over the length of string
    return `${errorCount}/${charCount}`;

}


const s = "abcxx";
console.log(printerError(s));