let myBooks = [];




function addBook() {
    const title = prompt("What book would you like to add?:")
    const author = prompt("Who is the author of this book?:")
    const pages = parseInt(prompt("How many pages does this book have?:"))
    const read = confirm("Have you read this book? Ok for Yes, Cancel for No:")

    const book = {
        title: title,
        author: author,
        pages: pages,
        read: read
    };

    myBooks.push(book);

    addBookToLibrary();
}


function addBookToLibrary() {
    const bookDisplay = document.getElementById('book-display')
    bookDisplay.innerHTML = '';

    for (let i = 0; i < myBooks.length; i++) {
        const book = myBooks[i];

        const bookDiv = document.createElement('div')
        bookDiv.classList.add('book')

        const title = document.createElement('p')
        title.textContent = `Title: ${book.title}`

        const author = document.createElement('p')
        author.textContent = `Author: ${book.author}`

        const pages = document.createElement('p')
        pages.textContent = `Pages: ${book.pages}`

        const read = document.createElement('p')
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);
        bookDisplay.appendChild(bookDiv);
    }
}

window.onload = function () {
    const newBookBtn = document.getElementById('newBookBtn')
    newBookBtn.addEventListener('click', addBook)
}
