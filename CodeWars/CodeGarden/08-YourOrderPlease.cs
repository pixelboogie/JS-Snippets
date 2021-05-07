using System;

public static class Kata
{
  public static string Order(string words)
  {
    string[] sarray = words.Split(' ');
    string[] final = new string[sarray.Length];
    if(words == "") return "";
    
    for(int i=0; i<sarray.Length; i++){
      for(int n=1; n<10; n++){
        if(sarray[i].Contains(n.ToString())){
          final[n-1]=sarray[i];
        }
      }
    }
    return string.Join(" ", final);
  }
}