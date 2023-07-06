let myBooks = []

window.onload = function () {
    const newBookForm = document.getElementById('newBookForm')
    newBookForm.addEventListener('submit', addBook)
};


function addBook(event) {
    event.preventDefault()

    const titleInput = document.getElementById('title')
    const authorInput = document.getElementById('author')
    const pagesInput = document.getElementById('pages')
    const readInput = document.getElementById('read')

    const title = titleInput.value
    const author = authorInput.value
    const pages = parseInt(pagesInput.value)
    const read = readInput.checked

    const book = {
        title: title,
        author: author,
        pages: pages,
        read: read
    };

    myBooks.push(book)

    addBookToLibrary()

    titleInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    readInput.checked = false
}


function addBookToLibrary() {
    const bookDisplay = document.getElementById('book-display')
    bookDisplay.innerHTML = ''

    for (let i = 0; i < myBooks.length; i++) {
        const book = myBooks[i]

        const bookDiv = document.createElement('div')
        bookDiv.classList.add('book')

        bookDiv.style.margin = '5px 10px'

        const title = document.createElement('p')
        title.textContent = `Title: ${book.title}`

        const author = document.createElement('p')
        author.textContent = `Author: ${book.author}`

        const pages = document.createElement('p')
        pages.textContent = `Pages: ${book.pages}`

        const read = document.createElement('p')
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`

        const remove = document.createElement('button')
        remove.textContent = `Remove Book`

        const nowRead = document.createElement('button')
        nowRead.textContent = `Read`

        bookDiv.appendChild(title)
        bookDiv.appendChild(author)
        bookDiv.appendChild(pages)
        bookDiv.appendChild(read)

        if (!book.read) {
            bookDiv.appendChild(nowRead)
        } else {
            read.textContent = 'Read: Yes'
        }

        nowRead.addEventListener('click', function () {
            const readButton = this
            readButton.parentNode.removeChild(readButton)
            read.textContent = 'Read: Yes'
        });

        bookDiv.appendChild(remove);

        remove.style.height = '40px'

        const divElements = [title, author, pages, read]

        divElements.forEach(element => {
            element.style.color = '#9C6644'
            element.style.fontWeight = '700'
        })


        bookDisplay.appendChild(bookDiv)

        remove.addEventListener('click', function () {
            myBooks.splice(i, 1)
            bookDisplay.removeChild(bookDiv)
        });
    }
}