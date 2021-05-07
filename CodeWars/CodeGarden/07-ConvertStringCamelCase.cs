using System;

public class Kata
{
    public static string ToCamelCase(string str)
    {
        string s = "";

        for (int i = 0; i < str.Length; ++i)
        {
            if (str[i] == '-' || str[i] == '_')
            {
                s += Char.ToUpper(str[i + 1]);
                i++;
            }

            else
            {
                s += str[i];
            }
        }

        return s;
    }
}