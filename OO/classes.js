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


// Instantiate object
const book1 = new Book('Book 1', 'Mr. Dude', 2018);

// console.log(book1);
console.log(book1.year);
book1.revise(2019);
console.log(book1.year);

console.log(Book.topBookStore());