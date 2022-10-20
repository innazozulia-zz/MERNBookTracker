const express = require("express");
const {
  createBook,
  getBook,
  getBooks,
} = require("../controllers/booksController");
const router = express.Router();

//get all books
router.get("/", getBooks);

//get a single book
router.get("/:id", getBook);

//post a new book
router.post("/", createBook);

//delete a new book
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a book" });
});

//update a new book
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a book" });
});

module.exports = router;
