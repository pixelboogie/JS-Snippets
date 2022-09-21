function trickOrTreat(children,candies){
  
    const hasBomb = bag => bag.some(item => item === 'bomb');
    if(children > candies.length || candies.some(hasBomb)){
      return "Trick or treat!";
    }
    
    const numCandies = bag => bag.reduce((total, thing) => thing === 'candy' ? total + 1 : total, 0);
    const atLeast2 = candies.every(bag => numCandies(bag) >= 2);
      
    const numCandiesInFirstBag = numCandies(candies[0]);
    const allSameAmtCandies = candies.every(bag => numCandies(bag) == numCandiesInFirstBag);
      
    if(atLeast2 && allSameAmtCandies) {
      return "Thank you, strange uncle!"
    }else{
      return "Trick or treat!";
    }
  }
  