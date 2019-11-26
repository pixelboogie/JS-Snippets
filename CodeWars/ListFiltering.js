function filter_list(l) {
    let newArray = [];

    // cycle through each item  
    for(let i=0; i<l.length; i++){
        // check if a string
            if(typeof l[i] === 'string'){
            // if so then add it to the new Array
        }else{
            newArray.push(l[i]);
        }
    }
        // Return a new array with the strings filtered out
        // console.log(newArray);f
        return newArray;
  }

  filter_list([1,2,'aasf','1','123',123])
  