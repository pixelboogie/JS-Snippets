using System;
using System.Collections.Generic;

public class Kata
{
  public static Dictionary<char, int> Count(string str)
  {
      Dictionary<char, int> dic = new  Dictionary<char, int>();
  
    foreach(char c in str)
    {
       if(dic.ContainsKey(c))
       {
          dic[c] += 1;
       }
       else
       {
       dic.Add(c,1);
       
       }
    
    }
    
    return dic;
    
  }
}