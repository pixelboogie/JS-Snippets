using System;
using UnityEngine;



public class Kata : MonoBehaviour
{

  public static string[] SortByLength (string[] array)
  {

    Array.Sort(array, (x, y) => x.Length.CompareTo(y.Length));

    foreach (string i in array) 
    {
        Debug.Log(i);
    }
    
    return array;
  }


  void Start(){
    //   SortByLength(new string[] { "Beg", "Life", "I", "To" });
      SortByLength(new string[] { "", "Moderately", "Brains", "Pizza" });
    //   SortByLength(new string[] { "Longer", "Longest", "Short" });
  }

}



///



















