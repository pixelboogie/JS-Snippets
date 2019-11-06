// old function technique  
function studentList1(students) {
    console.log(students);
}
studentList1(["Joe", "Cindy", "Jeanne"]);

// old function technique 2
var studentList2 = function(students) {
    console.log(students);
};
studentList2(["Joe", "Cindy", "Jeanne"]);

// new arrow function technique
 var studentList3 = (students) => console.log(students);
 studentList3(["Joe", "Cindy", "Jeanne"]);

// new arrow function technique 2
var addThem = (num1, num2) => console.log("addThem = " + (num1 + num2));
 addThem(1,2);



 // -----------

 // ******* WORKING ON THIS, STILL NOT WORKING YET
// new arrow function technique 3
// var add = (num1, num2) => (num1 + num2);
const add = (num1, num2) => num1 + num2;
// const add = (num1, num2) => console.log( num1 + num2 );
var add1 = (aNum) => (aNum + 1);
var add2 = (aNum) => (aNum + 2);
var add3 = (aNum) => (aNum + 3);

// var addThem = (num1, num2) => (console.log("------------------------"));
// var addThem = (num1, num2) => (num1 = num1, num2 = num2 );
    // newNum = this.num1 + this.num2
    // newNum = num1 + num2
    // .then(console.log(newNum));
    // .then(console.log("This Far!"));
    // const multiplyES6 = (x, y) => { return x * y };


const addBunch = (num1, num2) => 
    console.log("addBunch = " + add(num1, num2));
    // .then(console.log("addBunch2 = " + add(num1, num2)));
    // .then(console.log("------------------------"));




addBunch(2,2)
    // .then(console.log(addBunch));
    // .then(console.log("------------------------"));

    console.log("------------------------");