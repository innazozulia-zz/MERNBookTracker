const express = require("express");
const {
  getBook,
  getBooks,
  createBook,
  deleteBook,
  updateBookInfo,
} = require("../controllers/booksController");
const router = express.Router();

//get all books
router.get("/", getBooks);

//get a single book
router.get("/:id", getBook);

//post a new book
router.post("/", createBook);

//delete a new book
router.delete("/:id", deleteBook);

//update a new book
router.patch("/:id", updateBookInfo);

module.exports = router;
