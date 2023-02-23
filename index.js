import express from 'express';
import ErrorMiddleware from './middleware/index.js';
import dotenv from 'dotenv';
// import cors from 'cors';
import mongoose from 'mongoose';
import BookRouter from './routes/BookRoute.js';
import AuthorRouter from './routes/AuthorRoute.js';

const app = express()
dotenv.config()

mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.NODE_ENV === 'prod' ? process.env.DB_URL : process.env.DB_URL_LOCAL, {})
    .then(() => console.log('connected...'))
    .catch(err => console.log(err))

app.use(express.json())
// app.use(cors)

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.use('/book', BookRouter)
app.use('/author', AuthorRouter)

app.use(ErrorMiddleware)

app.listen(process.env.PORT, () => console.log(`${process.env.NODE_ENV.toUpperCase()} Server is listening on port ${process.env.PORT}!`))