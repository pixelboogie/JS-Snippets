const sequenceSum = (begin, end, step) => {

    if(begin > end) { return 0; }

    let sum = 0;

    let currentValue = begin;

    while(currentValue <= end)
    {
        sum += currentValue;
        currentValue += step;
    }

    return sum;

  };


  sequenceSum(2, 6, 2);
  sequenceSum(1, 5, 1)
  sequenceSum(1, 5, 3)