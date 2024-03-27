const {
  getAllBook,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../Controllers/book.controller");
const express = require("express");
const router = express.Router();

router.get("/", getAllBook);
router.get("/:id", getBookById);
router.post("/create", createBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
