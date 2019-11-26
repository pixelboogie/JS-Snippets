String.prototype.toJadenCase = function () {
    
    // console.log(this);

    // a place to store the jadenCasestr
    let jadenCase = '';

    // a place to stoere whether th enext char we encounter shold be cap
    
    // always cap gthe first letter of the string
    let caplitalize = true;
    
    
    // iterate over each letter in string
    for(let i=0; i< this.length; i++){
        const letter = this[i];
// if the current letter is q space
    // the next letter should be cap 
    if(letter === ' '){
        caplitalize = true;
        jadenCase += ' ';
    }else{
        // else  
        // append either the letter itslef or cap the letter
        if(caplitalize){
            caplitalize = false;
            jadenCase += letter.toUpperCase();
        }else{
            jadenCase += letter;
        }

    }
    }



    // return "Answer: ";
    return jadenCase;
  };


  var str = "How can mirrors be real if our eyes aren't real";
  var jadenStr = str.toJadenCase();
  console.log(jadenStr);




     // split the string on spaces

    //cqplalize the first letter of each wrod

    // join the all back together