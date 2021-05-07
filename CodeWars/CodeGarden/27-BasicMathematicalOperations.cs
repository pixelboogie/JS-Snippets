namespace Solution
{
  public static class Program
  {
    public static double basicOp(char operation, double value1, double value2)
    {
      double answer = 0.00;

            if (operation == '+')
            {
                answer = value1 + value2;
            }
            if (operation == '-')
            {
                answer = value1 - value2;
            }
            if (operation == '*')
            {
                answer = value1 * value2;
            }
            if (operation == '/')
            {
                answer = value1 / value2;
            }

            return answer;
    }
  }
}