const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2023',
    getSummary: function(){
        return `${this.title} was writtien by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2025',
    getSummary: function(){
        return `${this.title} was writtien by ${this.author} in ${this.year}`;
    }
};


// console.log(book1.getSummary());
// console.log(book2.getSummary());

console.log(Object.values(book2));
console.log(Object.keys(book2));


