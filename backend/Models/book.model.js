const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const BookSchema = new Schema({
  bookname: { type: String},
  author: { type: String},
  image: { type: String},
  publisher_url: { type: String},
  publisher: { type: String},
  isbn: { type: Number},

});
const BookModel = model("Book", BookSchema);
module.exports = BookModel;