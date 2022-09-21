using System;

public class Printer 
{

 static void Main()
    {
        Console.WriteLine("Main Starting...");
        PrinterError("abcxxx");
    }


    public static string PrinterError(String s) 
    {
        int charCount = 0;
        int errorCount = 0;
      
        charCount = s.Length;
      
        for(int i=0; i<=charCount-1; i++)
        {
            var currentLetter = s[i];
        
            if(currentLetter > 'm')
            {
                errorCount++;
            }
        }
        Console.WriteLine(errorCount + "/" + charCount);
        return errorCount + "/" + charCount;
    }
}









