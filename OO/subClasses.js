class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was writtien by ${this.author} in ${this.year}`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Barnes & Noble';
    }
}


// Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month){
    super(title, author, year);
    this.month = month;
    }
}



// Instantiate Magazine
const mag1 = new Magazine('Mag 1', 'Mr. Dude', 2018, 'Jan');


console.log(mag1);
console.log(mag1.year);
console.log(mag1.getSummary());
mag1.revise(2019);
console.log(mag1);
console.log(mag1.year);