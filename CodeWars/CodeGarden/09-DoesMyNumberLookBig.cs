using System;

public class Kata
{
  public static bool Narcissistic(int value)
  {
    int sum = 0;
    int digits = value;
    int length = value.ToString().Length;

        while (digits > 0) {
            int digit = digits % 10;  // grab last digit of number
            sum += (int)Math.Pow(digit, length); 
            digits = digits/10; // remove that digit from the value
        }

        return sum == value;
  }
}