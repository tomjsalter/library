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
      const bookAuthor = myLibrary[i].author.value;
      const bookTitle = myLibrary[i].title.value;
      const pageCount = myLibrary[i].pages.value;
      const readStatus = myLibrary[i].read.value;
      console.table(bookAuthor, bookTitle, pageCount, readStatus);
    }
}

newBook.addEventListener("click", () => {
    popUp.classList.toggle('active', 'force');
});

cancelBtn.addEventListener("click", () => {
    popUp.classList.toggle('active');
});

formSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    addBookToLibrary(author, title, pages, read);
    displayBook();
});