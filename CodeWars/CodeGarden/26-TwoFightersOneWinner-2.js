class Fighter {
    constructor(name, health, damageAttack) {
        this.name = name;
        this.health = health;
        this.damageAttack = damageAttack;
    }

    attack(damage) {
        this.health -= damage;
    }

    isAlive() {
        return this.health > 0;
    }
}



function declareWinner(fighter1, fighter2, firstAttacker) {
    let currentAttacker;
    let currentDefender;

    if (fighter1.name == firstAttacker) {
        currentAttacker = fighter1;
        currentDefender = fighter2;
    } else {
        currentAttacker = fighter2;
        currentDefender = fighter1;
    }

    while (fighter1.health > 0 && fighter2.health > 0) {

        currentDefender.attack(currentAttacker.damageAttack);

        // now swap them 
        const tempDefender = currentDefender;
        currentDefender = currentAttacker;
        currentAttacker = tempDefender;
    }


    if (fighter1.isAlive()) {
        return fighter1.name;
    } else {
        return fighter2.name;
    }


}


console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
//   console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
//   console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
//   console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
//   console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
//   console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")


/*

Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
  Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
  Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

*/
