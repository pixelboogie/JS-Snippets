function tickets(peopleInLine){

    let register = {
      25: 0,
      50: 0,
      100: 0
    };
      
    let answer = "No";
    
    for(let i=0; i<peopleInLine.length; i++){
      const payment = peopleInLine[i];
      if(payment === 25) {
        register[payment]++;
      }else if (payment === 50 && register[25] > 0){
        register[payment]++;
        register[25]--;
      }else if (payment === 100){
         if(register[25] > 0 && register[50] > 0){
          register[25]--;
          register[50]--;
          register[payment]++;
        }else if(register[25] > 2){
          register[25] -=3;
          register[payment]++;
        }else{
        return "NO";
      }
      }else{
        return "NO";
      }
    }
    return "YES";
  }