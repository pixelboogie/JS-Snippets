using System;
using System.Collections.Generic;
using System.Linq;

public class Remover
{
    public static List<int> RemoveSmallest(List<int> numbers)
    {
        if (numbers == null || numbers.Count == 0)
            return numbers;

        List<int> numbersCopy = numbers;
        numbersCopy.Remove(numbersCopy.Min());
        return numbersCopy;
    }
}