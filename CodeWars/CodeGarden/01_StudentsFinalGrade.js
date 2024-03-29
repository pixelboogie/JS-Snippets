/*

Code Wars

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0

*/



function finalGrade(examGrade, completedCount){
    
    // assume a zero
    let finalGrade = 0;

    if(examGrade > 50 || completedCount > 2){
        finalGrade = 75;
    }

    if(examGrade > 75 || completedCount > 5){
        finalGrade = 90;
    }

    if(examGrade > 90 || completedCount > 10){
        finalGrade = 100;
    }

    console.log("Answer: " + finalGrade);
    return finalGrade;
}

finalGrade(20, 2); 



