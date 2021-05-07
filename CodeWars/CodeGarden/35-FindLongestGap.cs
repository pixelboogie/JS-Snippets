using System;
using UnityEngine;

public class Kata : MonoBehaviour
{
  public static int Gap(int num)
  {
    
    // convert to binary string
    // string binaryString = num.ToString();
    string binaryString = Convert.ToString(num, 2);

    // Debug.Log("binaryString: " + binaryString);

    // place to store the length of overall longest segment
     int overallLongest = 0;

    // place to store length of current longes seqment 
     int currentLongest = 0;

    // iterate over binary string
    for (int i = 0; i < binaryString.Length; i++) {
        char bit = binaryString[i];
        // Debug.Log("bit: " + bit);
        // if the current value is 1
        if (bit == '1') {
            // check if current longest seqment is greater than overall longest seqment 
            if (currentLongest > overallLongest) {
                overallLongest = currentLongest;
            }
            // reset current longest seqment to 0
            currentLongest = 0;
        } else {
            // the current value is 0
            // increment current longest seqment 
            currentLongest++;
        }

    }

    Debug.Log("Longest: " + overallLongest);
    return overallLongest;
  }


    void Start(){
        Gap(9);
        // Gap(529);
        // Gap(20);
        // Gap(15);
    }
  
}



