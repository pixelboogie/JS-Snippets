function printerError(s) {

    let charCount = s.length;
    let errorCount = 0;

    for (let i = 0; i < s.length; i++) {
        const currCar = s[i];
        if (currCar > 'm'){
            errorCount++;
        }
    }

    console.log(`${errorCount}/${charCount}`);
    return `${errorCount}/${charCount}`;
}



var s="aaaxbbbbyyhwawiwjjjwwm";
printerError(s); //"3/56"