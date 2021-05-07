using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Kata : MonoBehaviour
{

  public static int[] Capitals(string word)
  {
    
    var indices = new List<int>();

    for(var i = 0; i<word.Length; i++)
    {
        if(char.IsUpper(word[i]))
        {
            indices.Add(i);
            Debug.Log(i);  // Debug
        }
    }
    
    return indices.ToArray();

  }

  void Start()
  {
    Capitals("CodeWars");
  }

    
}


