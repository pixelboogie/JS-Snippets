public static class Kata
{
  public static int Solution(int value)
  {
      // a place to store the sum
    int mySum = 0;

    // iterate over each 1 to number
    for (int i = 1; i < value; i++) {
         if (i % 3 == 0 || i % 5 == 0){ 
            mySum += i;
         }
    }

        return mySum;
  }
}