const api = new ApiService;

document.addEventListener("DOMContentLoaded", () => {
    api.fetchBooks()
    .then(books => {
        books.forEach(book => {
            const newBook = new Books(book)
            newBook.renderBooks()   
        })
    })
})
