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
      const topDiv = document.createElement("div");
      const bottomDiv = document.createElement("div");
      const bookAuthor = document.createElement("p");
      const bookTitle = document.createElement("p");
      const pageCount = document.createElement("p");
      const toggleStatus = document.createElement("button");
      const removeButton = document.createElement("button");
      topDiv.classList.add("top-div-container")
      bottomDiv.classList.add("bottom-div-container");
      bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
      bookTitle.textContent = myLibrary[i].title;
      pageCount.textContent = `Pages: ${myLibrary[i].pages}`;
      toggleStatus.textContent = !myLibrary[i].read
        ? "Not read"
        : "Read";
      removeButton.classList.add("remove-btn");
      bookAuthor.classList.add("book-author");
      bookTitle.classList.add("book-title");
      pageCount.classList.add("page-count");
      toggleStatusClass(toggleStatus);
      toggleStatus.addEventListener("click", () => {
        myLibrary[i].changeStatus();
        toggleStatus.textContent = !myLibrary[i].read ? "Not read" : "Read";
        toggleStatusClass(toggleStatus);
      });
      removeButton.textContent = "Remove";
      cardDiv.setAttribute("data-index", `${indexValue}`);
      cardDiv.classList.add("book-card");
      removeButton.addEventListener("click", () => {
        let cardAtt = cardDiv.getAttribute("data-index");
        removeBook(cardAtt);
      });
      topDiv.append(toggleStatus, bookTitle, bookAuthor, pageCount);
      bottomDiv.append(removeButton);
      cardDiv.append(
        topDiv,
        bottomDiv
      );
      libraryContainer.appendChild(cardDiv);
      indexValue++;
      popUp.classList.remove("active");
    }
}

function toggleStatusClass(toggleStatus) {
  if (toggleStatus.textContent === "Not read") {
    toggleStatus.classList.add("book-not-read");
    toggleStatus.classList.remove("book-read");
  } else if (toggleStatus.textContent === "Read") {
    toggleStatus.classList.add("book-read");
    toggleStatus.classList.remove("book-not-read");
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