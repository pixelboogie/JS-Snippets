using System.Collections.Generic;
using System;
public static class Kata
{
  public static string AlphabetPosition(string text)
  {
     string alphabet="abcdefghijklmnopqrstuvwxyz";
     List<string> Nums= new List<string>();
     
     foreach(char c in text)
     {
       if(alphabet.Contains(c.ToString().ToLower()))
         Nums.Add((alphabet.IndexOf(c.ToString().ToLower())+1).ToString());
     }
     
     string result= string.Join(" ", Nums.ToArray());
     
     return result;
  }
}