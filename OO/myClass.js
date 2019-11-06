class Car {
    constructor(brand) {
      this._carname = brand;
    }
    present() {
        console.log("I have a " + this._carname);
    }

    // getter
    get carname() {
        return this._carname;
      }

    // setter
    set carname(x) {
        this._carname = x;
      }
  }
  
var mycar = new Car("Ford");   // create an instnace called mycar with brandname Ford
console.log("My Car is a: " + mycar.carname);
mycar.carname = "Volvo"; // this changes the car brand
mycar.present(); // call the class function that logs the name
var mycar2 = new Car("Chevy");
console.log("mycar2 is a: " + mycar2.carname);
