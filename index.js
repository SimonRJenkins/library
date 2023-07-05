function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(title, author, pages, read)
    }
}

const theHobbit = new Book('The Hobbit ', 'By J.R.R Tolkien ', '295 pages ', 'Not read yet')
return theHobbit.info()