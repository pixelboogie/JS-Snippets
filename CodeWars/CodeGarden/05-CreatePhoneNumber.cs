public class Kata
{
  public static string CreatePhoneNumber(int[] numbers)
  {
      string phoneNum = "(";

  for (int i = 0; i < numbers.Length; i++) {
    if(i == 3){phoneNum += ") ";};
    if(i == 6){phoneNum += "-";};
    phoneNum += numbers[i];
  }

    return phoneNum;
  }
}