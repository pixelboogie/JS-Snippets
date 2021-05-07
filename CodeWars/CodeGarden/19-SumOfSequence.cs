public static class Kata
{
  public static int SequenceSum(int start, int end, int step)
  {
    if(start > end) { return 0; }

    var sum = 0;

    var currentValue = start;

    while(currentValue <= end)
    {
        sum += currentValue;
        currentValue += step;
    }

    return sum;
  }
}