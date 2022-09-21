using System.Collections.Generic;
using System.Linq;
using System;

public class Kata
{
    public static string SpinWords(string sentence)
    {

        string reverseString(string str)
        {
            char[] chars = str.ToCharArray();
            for (int i = 0, j = str.Length - 1; i < j; i++, j--)
            {
                char c = chars[i];
                chars[i] = chars[j];
                chars[j] = c;
            }
            return new string(chars);
        }

        string result = "";
        // split sentence on spaces
        string[] words = sentence.Split(" ");
        // iterate over the words
        for (int i = 0; i < words.Length; i++)
        {
            string word = words[i];
            if (word.Length >= 5)
            {
                // the word length is >= 5, reverse those characters
                word = reverseString(word);
            }
            // add to result
            result += " " + word;
        }

        return result.Trim();

    }

}