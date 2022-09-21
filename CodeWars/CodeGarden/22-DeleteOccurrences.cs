using System;
using System.Collections.Generic;
using System.Linq;

public class Kata {
  public static int[] DeleteNth(int[] arr, int x) {
    var result = new List<int>();
    foreach(var item in arr) {
      if(result.Count(i => i == item) < x)
        result.Add(item);
    }
    return result.ToArray();
  }
}