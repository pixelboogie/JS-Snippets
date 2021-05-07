using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

public class Kata : MonoBehaviour
{
   
    

public class Fighter {
  public string Name;
  public int Health, DamagePerAttack;

  public Fighter(string name, int health, int damageAttack) {
    this.Name = name;
    this.Health = health;
    this.DamagePerAttack = damageAttack;


  }

    public void attack(Fighter fighter) {
        fighter.takeDamage(this.DamagePerAttack);
    }

    public void takeDamage(int damage) {
        this.Health -= damage;
    }

    public bool isAlive() {
        return this.Health > 0;
    }
}


string declareWinner(Fighter fighter1, Fighter fighter2, string firstAttacker) {
    Fighter currentAttacker;
    Fighter currentDefender;

    if (fighter1.Name == firstAttacker) {
        currentAttacker = fighter1;
        currentDefender = fighter2;
    } else {
        currentAttacker = fighter2;
        currentDefender = fighter1;
    }

    while (fighter1.Health > 0 && fighter2.Health > 0) {

        currentAttacker.attack(currentDefender);
        
        // now swap them 
        Fighter tempDefender = currentDefender;
        currentDefender = currentAttacker;
        currentAttacker = tempDefender;
    }


    if (fighter1.isAlive()) {
        Debug.Log("Winner is: " + fighter1.Name);
        return fighter1.Name;
    } else {
        Debug.Log("Winner is: " + fighter2.Name);
        return fighter2.Name;
    }


}



    void Start()
    {

        // declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew");  // Lew
        // declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"); // "Harry
        // declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"); //, "Harald")
        // declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"); //, "Harald")
        // declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"); //, "Harald")
        declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"); //, "Harald")




    }

}












