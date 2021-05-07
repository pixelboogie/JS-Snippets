using System;
using System.Text.RegularExpressions;

public class Kata
{
    public static bool ValidatePin(string pin)
    {
        if (pin.Length == 4 || pin.Length == 6)
        {
            foreach (char c in pin)
            {
                if (c < '0' || c > '9')
                    return false;
            }
            return true;
        }
        return false;
    }
}
