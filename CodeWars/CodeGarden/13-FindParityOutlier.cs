using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
  public static int Find(int[] integers)
  {

    int oddCount = 0;
    int evenCount = 0;
    int lastEven = 0;
    int lastOdd = 0;
    int answer = 0;

    for (int i = 0; i < integers.Length; i++) {
        int currentVal = integers[i];
        if(currentVal % 2 == 0){
            lastEven = currentVal;
            evenCount++;
        }else{
            lastOdd = currentVal;
            oddCount++;
        }
        if(evenCount > 1 && oddCount == 1){
            answer = lastOdd;
        }else if(oddCount > 1 && evenCount == 1){
            answer = lastEven;
        }
    }
  return answer;
  }
}
