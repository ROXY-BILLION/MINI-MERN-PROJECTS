const books = require("../data/books");

const getBooks = (req, res) => {
    res.json(books);
};

const addBook = (req, res) => {
    const { title, author } = req.body;

    const newBook = {
        id: Date.now(),
        title,
        author
    };

    books.push(newBook);

    res.status(201).json(newBook);
};

module.exports = {
    getBooks,
    addBook
};