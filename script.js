let myLibrary = [];
const newBook = document.getElementById('new-book');
const popUp = document.querySelector('form');
const cancelBtn = document.getElementById('cancel-btn');
const formSubmit = document.querySelector('form')

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

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
      const bookAuthor = myLibrary[i].author;
      const bookTitle = myLibrary[i].title;
      const pageCount = myLibrary[i].pages;
      const readStatus = myLibrary[i].read;
      console.table(bookAuthor, bookTitle, pageCount, readStatus);
    }
}

newBook.addEventListener("click", () => {
    popUp.classList.toggle('active', 'force');
});

cancelBtn.addEventListener("click", () => {
    popUp.classList.toggle('active');
});

// [bug] on submit event, form returns element and element id, not value (text input)
formSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    addBookToLibrary(author, title, pages, read);
});

// set of 3 placeholder books to be added into myLibrary array via addBookToLibrary function
const harryPotter = new Book('J. K. Rowling', 'Harry Potter', '300', 'Read');
const lordOfTheRings = new Book('J. R. R. Tolkien', 'Lord of the Rings', '400', 'Not read');
const dune = new Book('Frank Herbert', 'Dune', '450', 'Not read');

myLibrary.push(harryPotter);
myLibrary.push(lordOfTheRings);
myLibrary.push(dune);