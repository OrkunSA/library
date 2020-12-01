const api = new ApiService;
const bookCollection = document.getElementById('book-collection')
let addBook = false;


document.addEventListener("DOMContentLoaded", () => {
    api.fetchCategories()
    .then(optionsArray => {
        new CategoryDropdown(optionsArray)
    })
    api.fetchBooks()
    .then(books => {
        books.forEach(book => {
        new BookCard(book)
        })
    })
    new BookForm();

    const newBookBtn = document.getElementById('new-book-btn')
    const bookFormContainer = document.querySelector("#book-form")

    newBookBtn.addEventListener("click", () => {
        addBook = !addBook;
        if(addBook) {
            bookFormContainer.style.display = "none"
        } else {
            bookFormContainer.style.display = "block"
        }
    })
})

