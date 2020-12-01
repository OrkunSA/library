class Books {
    constructor({id, title, author, published, image, category_id}) {
        this.id = id;
        this.title = title; 
        this.author = author;
        this.published = published;
        this.image = image;
        this.category_id = category_id;
        Books.all.push(this)
        this.renderBook() 
    }
    static bookURL = "http://localhost:3000/books"
    static bookCollection = document.getElementById("book-collection")
    
    static all = []

    get category() {
        return Categories.all.find((cat) => cat.id == this.category_id)
    }

    static renderByCategory(id) {
        bookCollection.innerHTML = ``
        const books = Books.all.filter((b) => b.category_id === id) 
        books.forEach(book => book.renderBook())
    }

    renderBook() {

        let eachBookDiv = document.createElement('div')
        eachBookDiv.classList.add('each-book')

        let bookImg = document.createElement("IMG");
        bookImg.setAttribute('class', 'books-images');
        bookImg.setAttribute('id', this.id);
        bookImg.src = this.image;

        let bookTitle = document.createElement("H4");
        bookTitle.innerHTML = this.title

        let bookAuthor = document.createElement("P");
        bookAuthor.innerHTML = `Author: ${this.author}`;

        let bookPublished = document.createElement("P");
        bookPublished.innerHTML = `Published: ${this.published}`;

        eachBookDiv.appendChild(bookImg);
        eachBookDiv.appendChild(bookTitle);
        eachBookDiv.appendChild(bookAuthor);
        eachBookDiv.appendChild(bookPublished);
        Books.bookCollection.appendChild(eachBookDiv);
    }
}