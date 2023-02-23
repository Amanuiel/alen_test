
import Book from '../models/Book.js'
import Author from '../models/Author.js'

//get all books
export const getAllBooks = async (req, res) => {
    const books = await Book.find({})
    return res.status(200).json({ books });
}

//get single book by id
export const getBook = async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) { 
        return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json({ book });
}

//add new book
export const insertBook = async (req, res) => {
    try {
        const bookData = await Book.create({ ...req.body });
        return res.status(201).json({ bookData });
    } catch (err) {
        return res.status(400).json({ err });
    }
}

//updating book data
export const updateBook = async (req, res) => {
    console.log(req.params.id)
    try {
        const book = await Book.findById(req.params.id);

        if (!book) { 
            return res.status(404).json({ message: 'Book not found' });
        }

        book.title = req.body.title;
        book.description = req.body.description;
        await book.save();

        return res.status(201).json({ book });
    } catch (err) {
        return res.status(404).json({ message: 'Book not found' });
    }
}

//deleting a book
export const removeBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await Book.findByIdAndDelete(req.params.id);
        return res.status(200).json({ book });
    } catch (err) { 
        return res.status(404).json({ message: 'Book not found' });
    }
}
