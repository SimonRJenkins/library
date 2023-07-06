bookDisplay = document.getElementById("book-display")
newBook = document.getElementById("new-book")

let myBooks = [];
bookDisplay.innerHTML = [myBooks];


newBook.addEventListener("click", function () {
    var title = prompt("What book would you like to add?")
    var author = prompt("Who is the author of this book?")
    var pages = prompt("How many pages does this book have?")
    var read = prompt("Have you read this book?")
    myBooks.push(title, author, pages + " pages", read);
    bookDisplay.innerHTML = [myBooks];
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(title, author, pages, read)
    }
}

function addBookToLibrary() {


}

const theHobbit = new Book('The Hobbit ', 'By J.R.R Tolkien ', '295 pages ', 'Not read yet')
//return theHobbit.info()

