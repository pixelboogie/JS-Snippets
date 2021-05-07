using System;

public class Kata {

   public static bool IsSquare(int n)
   {

        // iterate up to n
        for (var i = 0; i <= n; i++) {
            // square the current iteration value
            // if the result is equal to n
            if (i * i == n)
            {
                return true;
                // else return false
            }
                
        }
        return false;
    }

}