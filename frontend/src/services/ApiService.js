class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    fetchBooks = () => fetch(`${this.baseURL}/books`).then(res => res.json())
}