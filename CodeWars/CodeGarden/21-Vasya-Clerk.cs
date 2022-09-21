using System;

public class Line
{
    public static string Tickets(int[] peopleInLine)
    {
        int twentyFives = 0, fifties = 0;

        foreach (var bill in peopleInLine)
        {
            switch (bill)
            {
                case 25:
                    ++twentyFives;
                    break;
                case 50:
                    --twentyFives;
                    ++fifties;
                    break;
                case 100:
                    if (fifties == 0)
                    {
                        twentyFives -= 3;
                    }
                    else
                    {
                        --twentyFives;
                        --fifties;
                    }
                    break;
            }

            if (twentyFives < 0 || fifties < 0)
            {
                return "NO";
            }
        }

        return "YES";
    }
}