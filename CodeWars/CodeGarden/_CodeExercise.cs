//Microsoft (R) Visual C# Compiler version 3.4.0-beta4-19562-05 (ff930dec)
//Copyright (C) Microsoft Corporation. All rights reserved.


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Rextester
{
    public class Program
    {
        
       
        
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello, world!");
            
            int[] myCust = {2,2,3,3,4,4};
             QueueTime(myCust, 2);
        }
        

        
        
     private static long QueueTime(int[] customers, int n)
    {
      int[] till = new int[n];         
      for(int i=0;i<customers.Length;i++){       
        till[Array.IndexOf(till, till.Min())]+=customers[i];
          Console.WriteLine("till[0] is: " + till[0]);
          if(till.Length > 1){
                Console.WriteLine("till[1] is: " + till[1]);
          }
          if(till.Length > 2){
                Console.WriteLine("till[2] is: " + till[2]);
          }
      }
      // return the larger of specified numbers
     Console.WriteLine("Final answer is:" + till.Max());
     return till.Max();
    }

    }
}