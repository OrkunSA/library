class Books {
    constructor({id, title, author, published, image, categoryId}) {
        this.id = id;
        this.title = title; 
        this.author = author;
        this.published = published;
        this.image = image;
        this.categoryId = categoryId;
    }

    renderBooks() {
        let container = document.getElementById("container");
        container.classList.add('container-div');

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
        container.appendChild(eachBookDiv);

        return container
    }
}