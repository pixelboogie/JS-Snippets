function validatePIN(pin) {
    const is4Digits = pin.match(/^\d\d\d\d$/);
    const is6Digits = pin.match(/^\d\d\d\d\d\d$/);

    if (is4Digits || is6Digits) {
        return true;
    } else {
        return false;
    }
}
    console.log(validatePIN("0000")); 
    console.log(validatePIN("a000")); 
    console.log(validatePIN("1")); //,false, "Wrong output for '1'")
    console.log(validatePIN("12")); //,false, "Wrong output for '12'")
    console.log(validatePIN("123")); //,false, "Wrong output for '123'")
    console.log(validatePIN("12345")); //,false, "Wrong output for '12345'")
    console.log(validatePIN("1234567")); //,false, "Wrong output for '1234567'")
    console.log(validatePIN("-1234")); //,false, "Wrong output for '-1234'")
    console.log(validatePIN("1.234")); //,false, "Wrong output for '1.234'")
    console.log(validatePIN("-1.234")); //,false, "Wrong output for '-1.234'")
    console.log(validatePIN("00000000")); //,false, "Wrong output for '00000000'")
