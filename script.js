let myLibrary = [];
const newBook = document.getElementById('new-book');
const popUp = document.querySelector('form');
const cancelBtn = document.getElementById('cancel-btn');
const formSubmit = document.querySelector('form');
const libraryDisplay = document.querySelector('main');

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
        const cardDiv = document.createElement('div');
        const bookAuthor = document.createElement('p');
        const bookTitle = document.createElement('p');
        const pageCount = document.createElement('p');
        const readStatus = document.createElement('p');
        bookAuthor.textContent = myLibrary[i].author.value;
        bookTitle.textContent = myLibrary[i].title.value;
        pageCount.textContent = myLibrary[i].pages.value;
        readStatus.textContent = myLibrary[i].read.value;
        cardDiv.append(bookAuthor, bookTitle, pageCount, readStatus);
        libraryDisplay.appendChild(cardDiv);
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