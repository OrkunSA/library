class BookCard {
    constructor({id, title, author, published, image, category_id}) {
        this.id = id;
        this.title = title; 
        this.author = author;
        this.published = published;
        this.image = image;
        this.category_id = category_id;
        BookCard.all.push(this)
        this.renderBook() 
    }
    static bookURL = "http://localhost:3000/books"
    static bookCollection = document.getElementById("book-collection")
    
    static all = []

    get category() {
        return CategoryDropdown.all.find((cat) => cat.id == this.category_id)
    }

    static renderByCategory(id) {
        bookCollection.innerHTML = ``
        const books = BookCard.all.filter((b) => b.category_id === id) 
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

        let deleteButton = document.createElement("BUTTON");
        deleteButton.setAttribute = ('data-id', this.id);
        deleteButton.setAttribute = ('class', 'delete-btn');
        deleteButton.textContent = "DELETE"

        eachBookDiv.appendChild(bookImg);
        eachBookDiv.appendChild(bookTitle);
        eachBookDiv.appendChild(bookAuthor);
        eachBookDiv.appendChild(bookPublished);
        eachBookDiv.appendChild(deleteButton);
        BookCard.bookCollection.appendChild(eachBookDiv);
    }
}