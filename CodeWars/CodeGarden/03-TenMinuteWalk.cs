using System;

public class Kata
{
    public static bool IsValidWalk(string[] walk){
    if (walk.Length != 10) {
        return false;
    } else {
        int nCount =0;
        int sCount = 0;
        int eCount = 0;
        int wCount = 0;

        // loop through and incrment each as we find the value

        for (int i = 0; i < walk.Length; i++) {
            string element = walk[i];
            switch (element){
                case "n": 
                    nCount++;
                    break;
                case "s":
                    sCount++;
                    break;
                case "e":
                    eCount++;
                    break;
                case "w":
                    wCount++;
                    break;
            }
        }
        if(nCount == sCount && eCount == wCount){
            return true;
        }else{
            return false;
        }
    }
}
}

// count the n, s and the should be equal or else false
// count the e, w and they shold be equal or else false



// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // 'should return true');
// console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // 'should return false');
// console.log(!isValidWalk(['w'])); // 'should return false');
// console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // 'should return false');


/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/
