let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary() {
    const book = new Book(author, title, pages, read);
    return myLibrary.push(book);
}

// set of 3 placeholder books to be added into myLibrary array via addBookToLibrary function
const harryPotter = new Book('J. K. Rowling', 'Harry Potter', '300', 'Read');
const lordOfTheRings = new Book('J. R. R. Tolkien', 'Lord of the Rings', '400', 'Not read');
const dune = new Book('Frank Herbert', 'Dune', '450', 'Not read');

myLibrary.push(harryPotter);
myLibrary.push(lordOfTheRings);
myLibrary.push(dune);