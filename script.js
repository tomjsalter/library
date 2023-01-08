let myLibrary = [];
const newBook = document.getElementById('new-book');
const popUp = document.querySelector('form');
const cancelBtn = document.getElementById('cancel-btn');
const form = document.querySelector('form');
const libraryContainer = document.querySelector('main');
let indexValue = 0;

function Book(author, title, pages, read) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.read = read
    this.changeStatus = function() {
        this.read = !this.read;
    }
};
 
function addBookToLibrary(author, title, pages, read) {
    const book = new Book(author, title, pages, read);
    return myLibrary.push(book);
}

function displayBook() {
    indexValue = 0;
    while (libraryContainer.firstChild) {
      libraryContainer.removeChild(libraryContainer.lastChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        const cardDiv = document.createElement("div");
        const bookAuthor = document.createElement("p");
        const bookTitle = document.createElement("p");
        const pageCount = document.createElement("p");
        const readStatus = document.createElement("p");
        const toggleStatus = document.createElement("button");
        const removeButton = document.createElement("button");
        bookAuthor.textContent = myLibrary[i].author;
        bookTitle.textContent = myLibrary[i].title;
        pageCount.textContent = myLibrary[i].pages;
        toggleStatus.textContent = 'Change status';
        if (myLibrary[i].read === true) {
            readStatus.textContent = "Status: Read";
        } else if (myLibrary[i].read === false) {
            readStatus.textContent = "Status: Not read";
        }
        toggleStatus.addEventListener("click", () => {
            myLibrary[i].changeStatus();
            readStatus.textContent = !myLibrary[i].read ? "Status: Read" : "Status: Not read";
        }); 
        removeButton.textContent = "Remove";
        cardDiv.setAttribute("data-index", `${indexValue}`);
        removeButton.addEventListener("click", () => {
            let cardAtt = cardDiv.getAttribute('data-index');
            cardAtt = parseInt(cardAtt);
            myLibrary.forEach((value, index) => {
                if (cardAtt === index) {
                    myLibrary.splice(index, 1);
                    indexValue = 0;
                    displayBook();
                }
            });
        });
        cardDiv.append(
          bookAuthor,
          bookTitle,
          pageCount,
          readStatus,
          toggleStatus,
          removeButton
        );
        libraryContainer.appendChild(cardDiv);
        indexValue++;
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
        read = true;
    } else if (read[1].checked === true) {
        read = false;
    }
    addBookToLibrary(author, title, pages, read);
    displayBook();
    form.reset();
});