const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const BookSchema = new Schema({
  typeBook: {
    type: String,
    required: true,
  },
  nameBook: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publisher_url: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
  },
});
const BookModel = model("Book", BookSchema);
module.exports = BookModel;
