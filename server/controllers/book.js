let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let books = require('../models/books');

module.exports.displayBookList = (req, res, next) => {
    books.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', {title: 'Books', BookList: bookList});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {title: 'Add Book'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = books({
        "Title": req.body.Title,
        "Author": req.body.Author,
        "Genre": req.body.Genre,
        "Description": req.body.Description,
        "Price": req.body.Price
    });

    books.create(newBook, (err, books) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    books.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('books/details', {title: 'Edit Book', books: bookToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = books({
        "_id": id,
        "Title": req.body.Title,
        "Author": req.body.Author,
        "Genre": req.body.Genre,
        "Description": req.body.Description,
        "Price": req.body.Price
    });

    books.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    books.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/books');
        }
    });
}