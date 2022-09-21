using System;
using System.Linq;

public class Kata
{
  public static string ToWeirdCase(string s)
  {
    int c = -1;
    return String.Concat(s.Select((x) => 
    {
      if (x == ' ') c = -1;
      else c++;
      return c % 2 == 0 ? char.ToUpper(x) : char.ToLower(x);
    }));
  }
}