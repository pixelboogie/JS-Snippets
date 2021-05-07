using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class Kata : MonoBehaviour
{
    public static string ReverseWords(string str)
    {
        // place to store reversed word 
        string reversedStr = "";
        // place to note if we are iterating over word
        // a place to store indiv reversed word
        string reversedWord = "";
        // iterate over string 0 to end
        for (var i = 0; i < str.Length; i++)
        {
            char character = str[i];
            // if current char is not space
            if (character != ' ')
            {
                // prepend letter to indivReWord
                reversedWord = character + reversedWord;
                // else we saw a space
            }
            else
            {

                // append individ rev word to whole rev words // append the space char
                reversedStr += reversedWord + " ";
                reversedWord = "";


            }
        }

        return reversedStr + reversedWord;
    }




    void Start()
    {


        Debug.Log(ReverseWords("The quick brown fox jumps over the lazy dog."));
        Debug.Log(ReverseWords("apple"));
        Debug.Log(ReverseWords("a b c d"));
        Debug.Log(ReverseWords("double  spaced  words"));


    }

}


