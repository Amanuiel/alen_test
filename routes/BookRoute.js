const express = require('express')

const bookRouter = express.Router()

bookRouter.get('/', (req, res) => {
    res.send('routes are working')
})

bookRouter.post('/insertbook', require('../controllers/BookController'))
bookRouter.patch('/updatebook', require('../controllers/BookController'))
bookRouter.delete('/removebook', require('../controllers/BookController'))

module.exports = bookRouter