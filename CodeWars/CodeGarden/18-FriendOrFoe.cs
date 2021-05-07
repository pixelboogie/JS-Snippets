using System;
using System.Collections.Generic;

public static class Kata {
  public static IEnumerable<string> FriendOrFoe (string[] names) {
    
    var indices = new List<string>();
    
    for(var i = 0; i<names.Length; i++)
    {
        if(names[i].Length == 4)
        {
            indices.Add(names[i]);
        }
    }
    return indices.ToArray();
  }
  
}