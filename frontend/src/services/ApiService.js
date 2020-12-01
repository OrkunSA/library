class ApiService {
    constructor() {
        this.baseURL = "http://localhost:3000"
        this.addBook = false;
        this.newBookButton = document.getElementById('new-book-btn')
        this.addBookForm = document.getElementById('book-form')
        this.formInputs = document.querySelectorAll('.input-text')
        this.newBookButton.addEventListener('click', this.displayForm)
    }
    //GET
    fetchBooks = () => fetch(`${this.baseURL}/books`).then(res => res.json());

    fetchCategories = () => fetch(`${this.baseURL}/categories`).then(res => res.json());
    

    displayForm = () => {
        debugger
        this.addBook = !this.addBook //initially set to false at the top
        if (this.addBook) {
        this.addBookForm.style.display = 'block'
        } else{
        this.addBookForm.style.display = 'none'
        }
    }

}


    //CREATE
    // createBook = (e) => {
    //     e.preventDefault();
    //     const title = document.getElementById("book-title").value;
    //     const author = document.getElementById("book-author").value;
    //     const published = document.getElementById("book-published").value;
    //     const image = document.getElementById("book-image").value;
    //     const category_name = document.getElementById("book-category").value;


    //     let newBookObj = {
    //         book: {
    //             title,
    //             author,
    //             published,
    //             image,
    //             category_name,
    //         },
    //     };

    //     let configObj = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application.json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify(newBookObj),
    //     };

    //     fetch("http://localhost:3000/books", configObj)
    //     .then((res) => res.json())
    //     .then((json) => {
    //         let category = Category.find(json.data.attributes.category_id);
    //         if (!category) {
    //             category = new Category({
    //                 id: json.data.attributes.category_id,
    //                 name: json.data.attributes.category_name,
    //             });
    //             category.attachToDom();
    //         }

    //         let book = new Books(json.data.attributes);
    //         if(!!currentCategory && currentCategory.id == item.category_id) {
    //             book.renderBook();
    //         }  
    // })

    // bookForm.reset();
    // const newForm = document.getElementById("container mt-4");
    // newForm.hidden = true;
    // const newFormBtn = document.getElementById("new-book-btn");
    // newFormBtn.hidden = false;
