history = Category.create(name: 'History')
health = Category.create(name: 'Health')
science_fiction = Category.create(name: "Science Fiction")
law = Category.create(name: 'Law')
business = Category.create(name: "Business")
politics = Category.create(name: "Politics")




books = [
    {
        "title": "A Promised Land",
        "author": "Barrack Obama",
        "published": 2020 ,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/A+Promised+Land.jpg",
        "category": history 
    },
    {
        "title": "First Principles",
        "author": "Thomas E. Ricks",
        "published": 2020 ,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/First+Princibles+.jpg",
        "category": history
    },
    {
        "title": "Atomic Habits",
        "author": "James Clear",
        "published": 2018,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Atomic+Habits.jpg",
        "category": health 
    },
    {
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "published": 2012,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Fahrenheit+451.jpg",
        "category": politics
    },
    {
        "title": "Humans",
        "author": "Brandon Stanton",
        "published": 2020,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Humans.jpg",
        "category": science_fiction
    },
    {
        "title": "Man's Search for Meaning",
        "author": "Viktor E. Frank",
        "published": 2006,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Man's+Search+for+Meaning+.jpg",
        "category": history 
    },
    {
        "title": "Mexican Gothic",
        "author": "Silvia Moreno Garcia",
        "published": 2020,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/Mexican+Gothic.jpg",
        "category": science_fiction
    },
    {
        "title": "The 48 Laws of Power",
        "author": "Robert Greene",
        "published": 2000,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/The+48+Laws+of+Power.jpg",
        "category": law
    },
    {
        "title": "The Intelligent Investor",
        "author": "Benjamin Graham",
        "published": 2006,
        "image": "https://booksforproject.s3.us-east-2.amazonaws.com/The+Intelligent+Investor.jpg",
        "category": business
    }
]

books.each do |book| 
    Book.create(title: book[:title], author: book[:author], published: book[:published], image: book[:image], category: book[:category])
end