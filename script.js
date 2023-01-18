let myLibrary = [];
const newBook = document.getElementById("new-book");
const popUp = document.querySelector("form");
const cancelBtn = document.getElementById("cancel-btn");
const resetBtn = document.getElementById("reset-btn");
const form = document.querySelector("form");
const libraryContainer = document.querySelector("main");
let indexValue = 0;
cancelBtn.classList.add("change-status-btn");
resetBtn.classList.add("change-status-btn");

function Book(author, title, pages, read) {
  (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.read = read);
  this.changeStatus = function () {
    this.read = !this.read;
  };
}

function addBookToLibrary(author, title, pages, read) {
  const book = new Book(author, title, pages, read);
  return myLibrary.push(book);
}

function displayBook() {
  indexValue = 0;
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.lastChild);
  }
  buildBook();
}

function buildBook() {
    for (let i = 0; i < myLibrary.length; i++) {
      const cardDiv = document.createElement("div");
      const bookAuthor = document.createElement("p");
      const bookTitle = document.createElement("p");
      const pageCount = document.createElement("p");
      const readStatus = document.createElement("p");
      const toggleStatus = document.createElement("button");
      const removeButton = document.createElement("button");
      bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
      bookTitle.textContent = myLibrary[i].title;
      pageCount.textContent = `Pages: ${myLibrary[i].pages}`;
      toggleStatus.textContent = "Change status";
      toggleStatus.classList.add("form-btn");
      removeButton.classList.add("form-btn");
      bookAuthor.classList.add("book-author");
      bookTitle.classList.add("book-title");
      pageCount.classList.add("page-count");
      readStatus.classList.add("read-status");
      readStatus.textContent = !myLibrary[i].read
        ? "Status: Not read"
        : "Status: Read";
      toggleStatus.addEventListener("click", () => {
        myLibrary[i].changeStatus();
        readStatus.textContent = !myLibrary[i].read
          ? "Status: Not read"
          : "Status: Read";
      });
      removeButton.textContent = "Remove";
      cardDiv.setAttribute("data-index", `${indexValue}`);
      cardDiv.classList.add("book-card");
      removeButton.addEventListener("click", () => {
        let cardAtt = cardDiv.getAttribute("data-index");
        removeBook(cardAtt);
      });
      cardDiv.append(
        bookTitle,
        bookAuthor,
        pageCount,
        readStatus,
        toggleStatus,
        removeButton
      );
      libraryContainer.appendChild(cardDiv);
      indexValue++;
      popUp.classList.remove("active");
    }
}

function removeBook(cardAtt) {
  cardAtt = parseInt(cardAtt);
  myLibrary.forEach((value, index) => {
    if (cardAtt === index) {
      myLibrary.splice(index, 1);
      indexValue = 0;
      displayBook();
    }
  });
}

newBook.addEventListener("click", () => {
  popUp.classList.toggle("active", "force");
});

cancelBtn.addEventListener("click", () => {
  popUp.classList.toggle("active");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formResult = new FormData(form);
  let author = formResult.get("author");
  let title = formResult.get("title");
  let pages = formResult.get("pages");
  let read = document.getElementsByName("read-status");
  if (read[0].checked === true) {
    read = true;
  } else if (read[1].checked === true) {
    read = false;
  }
  addBookToLibrary(author, title, pages, read);
  displayBook();
  form.reset();
});

// set of 4 placeholder books
const harryPotter = new Book("J. K. Rowling", "Harry Potter", "300", "Read");
const lordOfTheRings = new Book(
  "J. R. R. Tolkien",
  "Lord of the Rings: Battle for Middle Earth",
  "400",
  "Not read"
);
const dune = new Book("Frank Herbert", "Dune", "450", "Not read");
const starWars = new Book(
  "George Lucas",
  "Star Wars: A New Hope",
  "768",
  "Not read"
);
myLibrary.push(harryPotter);
myLibrary.push(lordOfTheRings);
myLibrary.push(dune);
myLibrary.push(starWars);
displayBook();