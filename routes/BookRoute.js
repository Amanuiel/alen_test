import express from 'express';
import { getAllBooks, getBook, insertBook, updateBook, removeBook } from '../controllers/BookController.js'

const BookRouter = express.Router()

BookRouter.get('/', getAllBooks)
BookRouter.get('/:id', getBook)
BookRouter.post('/insert', insertBook)
BookRouter.patch('/update/:id', updateBook)
BookRouter.delete('/remove/:id', removeBook)

export default BookRouter 