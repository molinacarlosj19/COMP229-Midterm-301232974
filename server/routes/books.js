// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

//define controller
let bookController = require('../controllers/book');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/details/', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

    // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/details', {
        title: 'Add Book',
        books: books
      });
    }
  });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/details/', bookController.processAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/details/:id', bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/details/:id', bookController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', bookController.performDelete);


module.exports = router;
