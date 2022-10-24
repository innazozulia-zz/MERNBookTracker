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
  const { title, description, load } = req.body;

  //check errors at form
  let emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  //add data to DB
  try {
    const book = await Book.create({ title, description, load });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //   res.json({ mssg: "Post a new book" });
};

// delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  //check is ID valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such books !" });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  if (!book) {
    return req.status(400).json({ error: "Nom such books !" });
  }
  res.status(200).json(book);
};

// update a book
const updateBookInfo = async (req, res) => {
  const { id } = req.params;
  //check is ID valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such books !" });
  }

  const book = await Book.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!book) {
    return req.status(400).json({ error: "No such books" });
  }
  res.status(200).json(book);
};

module.exports = {
  getBook,
  getBooks,
  createBook,
  deleteBook,
  updateBookInfo,
};
