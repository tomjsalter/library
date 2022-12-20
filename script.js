let myLibrary = [];
const newBook = document.getElementById('new-book');
const popUp = document.querySelector('form');
const cancelBtn = document.getElementById('cancel-btn');
const form = document.querySelector('form');
let author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");

function Book(author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary(author, title, pages, read) {
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

form.addEventListener("submit", function(event) {
    event.preventDefault();
    author = author.value;
    title = title.value;
    pages = pages.value;
    addBookToLibrary(author, title, pages, read);
    form.reset();
});