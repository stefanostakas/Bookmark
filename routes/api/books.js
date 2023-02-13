const express = require('express');
const router = express.Router();
const books = require ('../../Books');

// Gets all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get Specific book
router.get('/:bookid', (req, res) => {
  const found = books.some(book => book.bookid === (req.params.bookid)); // boolean - checks if book exists
  if (found) {
    res.json(books.filter(book => book.bookid === parseInt(req.params.bookid))); // print book
  } else {
    res.status(400).json({ msg: 'Book not found' }); // set status to 400 and print msg
  }
});

// Add Book
router.post('/', (req, res) => {
  const newBook = {
    title: req.body.title,
    author: req.body.author,
    descr: req.body.descr,
    pages: req.body.pages,
    bookid: req.body.bookid,
    cover: req.body.cover,
  };
  books.push(newBook);
  res.json(books);
});

// Update Book
router.put('/:bookid', (req, res) => {
  const found = books.some(book => book.bookid === (req.params.bookid)); // boolean - checks if book exists
  if (found) {
    books.forEach(book => {
      if (book.bookid === parseInt(req.params.bookid)) {
        book.title = req.body.title ? req.body.title : book.title;
        book.author = req.body.author ? req.body.author : book.author;
        book.descr = req.body.descr ? req.body.descr : book.descr;
        book.pages = req.body.pages ? req.body.pages : book.pages;
        book.cover = req.body.cover ? req.body.cover : book.cover;
      }
    });
    res.json({ msg: `Book with book id ${req.params.bookid} updated successfully`, books });
  } else {
    res.status(400).json({ msg: 'Book not found' });
  }
});

// Delete Book
router.delete('/:bookid', (req, res) => {
  const bookid = req.params.bookid;
  const bookIndex = books.findIndex(book => book.bookid === bookid);

  if (bookIndex === -1) {
    res.status(404).json({ message: `Book with bookid ${bookid} not found.` });
  } else {
    books.splice(bookIndex, 1);
    res.json({ message: `Book with bookid ${bookid} deleted successfully.` });
  }
});

module.exports = router;

function getURL() {
  var id = window.location.href.split('?')[1];
}
