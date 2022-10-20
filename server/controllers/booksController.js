const Book = require("../models/booksSchema");
const mongoose = require("mongoose");

// get all books
const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });

  res.status(200).json(books);
};
// get a single book
const getBook = async (req, res) => {
  const { id } = req.params;

  // mongoose check valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such books" });
  }

  const book = await Book.findById(id);
  if (!book) {
    return res.status(400).json({ error: "No such book" });
  }
  res.status(200).json(book);
};
// create a new book
const createBook = async (req, res) => {
  const { title, descr, load } = req.body;
  //add data to DB
  try {
    const book = await Book.create({ title, descr, load });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //   res.json({ mssg: "Post a new book" });
};
// delete a book
// update a book

module.exports = {
  createBook,
  getBook,
  getBooks,
};
