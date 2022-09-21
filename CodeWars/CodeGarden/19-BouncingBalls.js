function bouncingBall(h,  bounce,  window) {
  
    if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
    
     console.log(h);
      console.log(bounce);
        console.log(window);
    
    let pastTimes = 1;
    let currentHeight = h;
    
    while(currentHeight >= window){
    currentHeight *= bounce;
  
    if(currentHeight > window){
      pastTimes += 2;
    }else if(currentHeight === window){
      pastTimes += 1;
    }
    }
    return pastTimes;
  }