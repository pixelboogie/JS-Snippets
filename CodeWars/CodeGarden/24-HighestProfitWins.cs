using System;
using System.Linq;

public class MinMax
{
    public static int[] minMax(int[] lst)
    {
        int[] answer = { lst.Min(), lst.Max() };

        return answer;
    }
}