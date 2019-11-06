// "use strict"
console.log("\n------------ 0 --------- \n"); 

var carName0 = "Yugo";
console.log("var: " + carName0);

function myFunction0() {
    console.log("Inside (because hoisted): " + carName0);
    var carName0 = "Volvo";
    console.log("Inside var: " + carName0);
  }

  myFunction0();
  console.log("After: " + carName0);


console.log("\n------------ 1 --------- \n"); 

var carName1;
console.log("var (declaration only): " + carName1);

function myFunction1() {
    console.log("Inside (hoisted): " + carName1);
    var carName1 = "Volvo";
    console.log("Inside var: " + carName1);
  }

  myFunction1();
  console.log("After: " + carName1);


console.log("\n------------ 2 --------- \n"); 

var carName2 = "Volvo";

console.log("var: " + carName2);

function myFunction2() {
  console.log("Inside: " + carName2);
  carName2 = "Porche";
  console.log("Inside (access to global variable changed it): " + carName2);
}

myFunction2();
console.log("After (global variabl has been changed): " + carName2);


console.log("\n------------ 3 --------- \n"); 

var carName3 = "Volvo";

console.log("var Before: " + carName3);

function myFunction3() {
  // if (typeof nothing === 'undefined') {
  // if (typeof carName3 === 'undefined') {
    console.log("Inside function3: will throw undefined error");
  // }else{
    // console.log("Inside: " + carName3);
  // }
  // i can give it block or function scope with let
  let carName3 = "Porche";

   console.log("let Reset: " + carName3);

}

myFunction3();

// shows the global variabl is unchanged
console.log("After: " + carName3);


console.log("\n------------ 4 --------- \n"); 

let carName4 = "Volvo";

console.log("let Before: " + carName4);

function myFunction4() {
  if (typeof nothing === 'undefined') {
  // if (typeof carName3 === 'undefined') {
    console.log("Inside function4: will throw undefined error");
  }else{
    console.log("Inside: " + carName4);
  }
  // i can give it block or function scope with let
  let carName4 = "Porche";
  console.log("let Reset: " + carName4);
}

myFunction4();
console.log("After: " + carName4);