using System;
using System.Collections.Generic;



class Kata
{
    public static int[] Pendulum(int[] values)
    {

        // sort the incoming values
        Array.Sort(values);

        // place to store the answer
        List<int> answerList = new List<int>();

        // fist value is the lowest
        answerList.Add(values[0]);

        // var to keep track left/right
        bool right = true;


        // iterate over sorted values
        for (var i = 1; i < values.Length; i++)
        {
            int value = values[i];

            // if should go on right
            if (right)
            {
                // Add to end of list
                answerList.Add(value);

            }
            else
            {
                // insert into begin of list
                answerList.Insert(0, value);
            }

            // flip tracker variable
            right = !right;

        }
        // convert list to array and return it
        return answerList.ToArray();
    }
}