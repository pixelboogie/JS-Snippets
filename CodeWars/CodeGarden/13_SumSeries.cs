using System;

// ERROR
// Solution.cs(21,19): error CS0121: The call is ambiguous between the following methods or properties: 'Math.Round(decimal, int)' and 'Math.Round(double, int)'

public class NthSeries {
	
	public static string seriesSum (int n) {

    int sum = 0;

    int currentDenominator = 1;


    for (int i = 0; i < n; i++) {

        sum += 1 / currentDenominator;

        currentDenominator += 3;

    }

      return Math.Round(sum, 2);
         

	}
}

