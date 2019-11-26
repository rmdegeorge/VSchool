const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author.js')

authorRouter.get("/", (req, res) => {
    Author.find((err, authors) => {
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(authors)
    })
})

authorRouter.post("/", (req, res) => {
    const newAuthor = new Author(req.body)
    newAuthor.save((err, newAuthor) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newAuthor)
    })
})


module.exports = authorRouter