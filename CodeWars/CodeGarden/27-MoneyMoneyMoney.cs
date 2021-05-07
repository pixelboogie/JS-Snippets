using System;

public class Kata
{
  public static int CalculateYears(double principal, double interest,  double tax, double desiredPrincipal)
    {
        int years = 0;
        double myPrincipal = principal;
        double interestRate = interest;
        double myTax = tax;
        double myDesired = desiredPrincipal;
        double gross = 0.00;
        double taxAmount = 0.00;
        double interestAmount = 0.00;

        while (myPrincipal < myDesired) {
            interestAmount = myPrincipal * interestRate; // find the interest amount
            gross = myPrincipal + interestAmount; // add interest
            taxAmount = interestAmount * myTax; // find taxes
            myPrincipal = gross - taxAmount; // subtract taxes
            years++;
        }

        return years;
    }
}
