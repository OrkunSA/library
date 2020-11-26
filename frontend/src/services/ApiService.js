class ApiService {
    constructor() {
        this.baseURL = "http://localhost:3000"
    }

    fetchBooks = () => fetch(`${this.baseURL}/books`).then(res => res.json())
}