const num1 = 1;
const num2 = 2;

var showEven = new Promise(function(resolve, reject) {
  let myNum = num1 + num2;
     if (myNum % 2 == 0) {
       resolve("That's an EVEN number: " + myNum);
    }
    else {
        reject("That's NOT an even number: " + myNum);
    }
  });

  showEven.then(function(result) {
    console.log(result); // "Stuff worked!"
  }, function(err) {
    console.log(err); // Error: "It broke"
  });
