function friend(friends){
    // a place to store the list of friends
    let myFriends = [];

    // iterate through each name
    for(let i = 0; i<friends.length; i++)
    {
    // if its 4 chars lenght, add to friends array
        if(friends[i].length == 4)
        {
            // add to friends array
            myFriends.push(friends[i]);
        }
    }

    // return a list of friends only
    return myFriends;
  }


  friend(["Ryan", "Kieran", "Mark"]);
  friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);
  friend(["Love", "Your", "Face", "1"]);

