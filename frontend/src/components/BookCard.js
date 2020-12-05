class BookCard {
    constructor({id, title, author, published, image, category_id}) {
        this.id = id;
        this.title = title; 
        this.author = author;
        this.published = published;
        this.image = image;
        this.category_id = category_id;
        this.attachEventListener();
        BookCard.all.push(this)
        this.renderBook() 
    }
    
    static bookCollection = document.getElementById("book-collection")
    
    static all = []

    attachEventListener() {
        BookCard.bookCollection.addEventListener("click", this.handleClick)
    }

    handleClick = (event) => {
        if (event.target.className === "delete-btn"){
        const id = event.target.dataset.id
        api.deleteBook(id)
        this.eachBookDiv.remove()
        }
    }

    static renderByCategory(id) {
        bookCollection.innerHTML = ``
        const books = BookCard.all.filter((b) => b.category_id === id) 
        books.forEach(book => book.renderBook())
    }

    renderBook() {

        let eachBookDiv = document.createElement('div')
        this.eachBookDiv = eachBookDiv
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
        this.deleteButton = deleteButton
        deleteButton.innerHTML = 
        `
        <button class="delete-btn" data-id="${this.id}">Delete</button>
        `

        eachBookDiv.appendChild(bookImg);
        eachBookDiv.appendChild(bookTitle);
        eachBookDiv.appendChild(bookAuthor);
        eachBookDiv.appendChild(bookPublished);
        eachBookDiv.appendChild(deleteButton);
        BookCard.bookCollection.appendChild(eachBookDiv);
    }
}