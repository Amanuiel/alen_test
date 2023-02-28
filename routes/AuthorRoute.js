import express from 'express';
import { getAllAuthors, getAuthor, insertAuthor, updateAuthor, removeAuthor } from '../controllers/AuthorController.js'

const AuthorRouter = express.Router()

AuthorRouter.get('/', getAllAuthors)
AuthorRouter.get('/:id', getAuthor)
AuthorRouter.post('/insert', insertAuthor)
AuthorRouter.patch('/update/:id', updateAuthor)
AuthorRouter.delete('/remove/:id', removeAuthor)

export default AuthorRouter 