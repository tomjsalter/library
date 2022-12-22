let myLibrary = [];
const newBook = document.getElementById('new-book');
const popUp = document.querySelector('form');
const cancelBtn = document.getElementById('cancel-btn');
const form = document.querySelector('form');
const libraryContainer = document.querySelector('main');

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
    while (libraryContainer.firstChild) {
      libraryContainer.removeChild(libraryContainer.lastChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        const cardDiv = document.createElement('div');
        const bookAuthor = document.createElement('p');
        const bookTitle = document.createElement('p');
        const pageCount = document.createElement('p');
        const readStatus = document.createElement('p');
        bookAuthor.textContent = myLibrary[i].author;
        bookTitle.textContent = myLibrary[i].title;
        pageCount.textContent = myLibrary[i].pages;
        readStatus.textContent = myLibrary[i].read;
        cardDiv.append(bookAuthor, bookTitle, pageCount, readStatus);
        libraryContainer.appendChild(cardDiv);
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
    let author = document.getElementById("author");
    let title = document.getElementById("title");
    let pages = document.getElementById("pages");
    let read = document.getElementsByName("read-status");
    author = author.value;
    title = title.value;
    pages = pages.value;
    if (read[0].checked === true) {
        read = 'read';
    } else if (read[1].checked === true) {
        read = 'not read';
    }
    addBookToLibrary(author, title, pages, read);
    form.reset();
});

// set of 3 placeholder books
const lordOfTheRings = new Book('J R Tolkien', 'Lord of the Rings', '980', 'Not read');
const harryPotter = new Book('J K Rowling', 'Harry Potter', '760', 'Read');
const starWars = new Book('George Lucas', 'Star Wars', '890', 'Not read');

myLibrary.push(lordOfTheRings);
myLibrary.push(harryPotter);
myLibrary.push(starWars);