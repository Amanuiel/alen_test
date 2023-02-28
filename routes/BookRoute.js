import express from 'express';
import { getAllBooks, getBook, insertBook, updateBook, removeBook } from '../controllers/BookController.js'
import { auth } from '../middleware/index.js';

const BookRouter = express.Router()

BookRouter.get('/', getAllBooks)
BookRouter.get('/:id', getBook)
BookRouter.post('/insert', auth, insertBook)
BookRouter.patch('/update/:id', auth, updateBook)
BookRouter.delete('/remove/:id', auth, removeBook)

export default BookRouter 