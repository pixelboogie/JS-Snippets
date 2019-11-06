function Book(title, author, year) {
    // console.log("Book Initialized");
    this.title = title;
    this.author = author;
    this.year = year;

    // this.getSummary = function(){
    //     return `${this.title} was writtien by ${this.author} in ${this.year}`;
    // }
};


Book.prototype.getSummary = function(){
    return `${this.title} was writtien by ${this.author} in ${this.year}`;
}

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2025',
//     getSummary: function(){
//         return `${this.title} was writtien by ${this.author} in ${this.year}`;
//     }
// };


// console.log(book1.getSummary());
// console.log(book2.getSummary());

// instantiate an object
const book1 = new Book('Book One', 'John Doe', 2019);
const book2 = new Book('Book Two', 'Jane Doe', 2020);

// console.log(book1);
console.log(book1.getSummary());
// console.log(book2);

