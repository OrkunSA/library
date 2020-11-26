books = [
    {
        "title": "A Promised Land",
        "author": "Barrack Obama",
        "published": 2020 ,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/A+Promised+Land.jpg",
        "category_id":1 
    },
    {
        "title": "First Principles",
        "author": "Thomas E. Ricks",
        "published": 2020 ,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/First+Princibles+.jpg",
        "category_id": 1
    },
    {
        "title": "Atomic Habits",
        "author": "James Clear",
        "published": 2018,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Atomic+Habits.jpg",
        "category_id": 2
    },
    {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "published": 2012,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Fahrenheit+451.jpg",
        "category_id": 3
    },
    {
        "title": "Humans",
        "author": "Brandon Stanton",
        "published": 2020,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Humans.jpg",
        "category_id": 4
    },
    {
        "title": "Man's Search for Meaning",
        "author": "Viktor E. Frank",
        "published": 2006,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Man's+Search+for+Meaning+.jpg",
        "category_id": 1
    },
    {
        "title": "Mexican Gothic",
        "author": "Silvia Moreno Garcia",
        "published": 2020,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Mexican+Gothic.jpg",
        "category_id": 5
    },
    {
        "title": "The 48 Laws of Power",
        "author": "Robert Greene",
        "published": 2000,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/The+48+Laws+of+Power.jpg",
        "category_id": 3
    },
    {
        "title": "The Intelligent Investor",
        "author": "Benjamin Graham",
        "published": 2006,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/The+Intelligent+Investor.jpg",
        "category_id": 6
    }
]

books.each do |book| 
    Book.create(title: book[:title], author: book[:author], published: book[:published], image: book[:image], category_id: book[:category_id])
end