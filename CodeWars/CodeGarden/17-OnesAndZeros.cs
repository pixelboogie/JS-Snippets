using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Kata : MonoBehaviour
{

    public static int binaryArrayToNumber(int[] BinaryArray)
    {
        // place to store the sum
        var sum = 0;


        for(var i=0; i<BinaryArray.Length; i++)
        {
            var value = BinaryArray[i];
        // take 2 raised to the power arr.length - 1 - i
        // add to sum
            var power = BinaryArray.Length - 1 - i;
            // var powerOf2 = 2 ** power;
            var powerOf2 = Math.Pow(2, power);
            sum += (int)powerOf2 * value;

        }
        // return the sum
        return sum;

    }

  

    void Start()
    {
        int[] nums1 = {0,0,0,1};

        binaryArrayToNumber(nums1);
    }

    
}



