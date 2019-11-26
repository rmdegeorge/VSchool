const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book.js')

bookRouter.get("/:authorID", (req, res) => {
    Book.find({author: req.params.authorID}, (err, books) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(books)
    })
})

bookRouter.post("/:authorID", (req, res) => {
    req.body.author = req.params.authorID
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(savedBook)
    })
})

module.exports = bookRouter