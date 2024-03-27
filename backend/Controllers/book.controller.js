const BookModel = require("../Models/book.model");

const getAllBook = async (req, res) => {
  try {
    const book = await BookModel.find();
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "have an error on server !" });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const getBook = await BookModel.findById(id);
    if (!id) {
      console.log("Not Found Book");
      res.status(404).send({ message: "Not Found Book" });
    }
    res.status(200).json(getBook);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "have an error on server !" });
  }
};

const createBook = async (req, res) => {
  const book = req.body;
  console.log(book);
  const newBook = new BookModel(book);
  try {
    const book = await newBook.save();
    res.status(200).json(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "have an error on server !" });
  }
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(data);
  try {
    const updateBook = await BookModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updateBook) {
      res.status(404).json({ message: "Book Not Found" });
    }
    res.status(201).json({ message: "Book Updated!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const deleteBook = await BookModel.findByIdAndDelete(id);
    if (!deleteBook) {
      res.status(404).json({ message: "Book NOt Found" });
    }
    res.status(200).json(deleteBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
