const api = new ApiService;
const bookCollection = document.getElementById('book-collection')


document.addEventListener("DOMContentLoaded", () => {
    api.fetchCategories()
    .then(optionsArray => {
        new Categories(optionsArray)
    })
    api.fetchBooks()
    .then(books => {
        books.forEach(book => {
        new Books(book)
        })
    })
})

