class ApiService {
    constructor() {
        this.baseURL = "http://localhost:3000"
        // this.addBook = false;
        this.newBookButton = document.getElementById('new-book-btn')
        this.addBookForm = document.getElementById('book-form')
        this.formInputs = document.querySelectorAll('.input-text')
        this.newBookButton.addEventListener('click', this.displayForm)
    }
    //READ
    fetchBooks = () => fetch(`${this.baseURL}/books`).then(res => res.json());

    fetchCategories = () => fetch(`${this.baseURL}/categories`).then(res => res.json());

    //CREATE

    createBook = (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        };
        return fetch(`${this.baseURL}/books`, config).then((res) => res.json());
    };

    //DELETE

}
