using System;
using UnityEngine;
using System.Linq;


public class Kata : MonoBehaviour
{

  public static string SortGiftCode(string code)
  {
    // return string joined at each letter, alphabetic order
    return string.Join("", code.OrderBy(v => v));
  }

  void Start(){
    SortGiftCode("abcdef");
  }

}


