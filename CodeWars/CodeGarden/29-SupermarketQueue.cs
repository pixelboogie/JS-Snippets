using System;
using System.Linq;
using System.Collections.Generic;

public class Kata
{
    public static long QueueTime(int[] customers, int n)
    {
      int[] till = new int[n];         
      for(int i=0;i<customers.Length;i++){       
        till[Array.IndexOf(till, till.Min())]+=customers[i];
      }
      // return the larger of specified numbers
     return till.Max();
    }
}

