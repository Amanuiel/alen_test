
const express = require('express')
const book = require('../../models/Book.js')
const author = require('../../models/Author.js')

  //add new book
  const insertBook = async(req, res)=>{
    try{
        const bookData = await Book(req.body).save();
        if(bookData)
        return {value: bookData, res, err: null}
        else
        return "error"
    }catch (err) {
        return {value: null, err: err.message}
    }
  }

  //updating book data
  const updateBook = async(req, res)=>{
    const id = req.query.id
    try{
        const book = await Book.findByIdAndUpdate(req.query.id, {title: req.body.title, description: req.body.description})
        if(book){
            return {book: book, res, err: null}
        }else{
            return { book: null, err: 'Book not found'}
        }
    
    }catch (err){
        return { book: null, err: err.message}
    }
  }

  //deleting a book
  const removeBook = async(req, res) =>{
        const remove = await User.deleteOne({_id: req.query.id},{new: true})
            if(remove){
                return {value: remove, err: null}
            }else{
                return { value: null, err: 'User not found'}
            }
  }
  

module.exports = {
    insertBook,
    updateBook,
    removeBook
};