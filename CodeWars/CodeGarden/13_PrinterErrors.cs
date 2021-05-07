using System;

public class Printer 
{
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
        return errorCount + "/" + charCount;
    }
}