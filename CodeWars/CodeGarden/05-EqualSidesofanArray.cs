public class Kata
{
  public static int FindEvenIndex(int[] arr)
  {
        int sumSubArray(int[] myArr, int start, int end){
            int sum = 0;
            for (int index = start; index < end; index++) {
                sum += myArr[index];
            }

            return sum;
        }

     // iterate over the array
    for (int i = 0; i < arr.Length; i++) {
        int leftSum = sumSubArray(arr, 0, i);
        int rightSum = sumSubArray(arr, i+1, arr.Length);
        if(leftSum == rightSum){
         return i;
        }
    }

    return -1;


  }
}