class ApiService {
    constructor() {
        this.baseURL = "http://localhost:3000"
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

    deleteBook = (id) => {
        const config = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        };

        fetch(`${this.baseURL}/books/${id}`, config)
            .then((res) => res.json())
    }
}
