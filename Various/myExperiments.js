// function addThem(num1, num2){
//     console.log("Answer: " + (num1 + num2));
// }

// addThem(1,2);

// var addThem2 = (num1, num2) => console.log("Answer: " + (num1 + num2));

// addThem2(1,2);



// add 2 numbers in an array

// let arr = [2, 5];
// let str = String(25);

// let answer = parseInt(str[0]) * parseInt(str[1]);

// console.log(answer);

digitCount = 3;
aString = "1234";
tempNum = aString[0];

for(let i=1; i<(aString.length); i++){
    // tempNum = Number(numString[i]) * Number(numString[i+1]);
    tempNum = tempNum * parseInt(aString[i]);
    console.log("tempNum: " + tempNum);
    console.log("digitCount: " + digitCount);
}


