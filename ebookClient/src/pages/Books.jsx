import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../component/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // New state for current page
  const cardsPerPage = 6;

  useEffect(() => {
    axios
      .get("http://localhost:3000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const handleFilterChange = (type) => {
    setFilterType(type);
    setStartIndex(0);
    setCurrentPage(1); // Reset current page when filter changes
  };

  const filteredBooks = filterType
    ? books.filter((book) => book.type_book === filterType)
    : books;

  const totalPages = Math.ceil(filteredBooks.length / cardsPerPage); // Calculate total pages

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + cardsPerPage);
    setCurrentPage((prevPage) => prevPage + 1); // Increment current page
  };

  const handleBack = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - cardsPerPage));
    setCurrentPage((prevPage) => prevPage - 1); // Decrement current page
  };

  const limitedBooks = filteredBooks.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div>
      <img
        className="w-full h-[30rem]"
        src="https://webmail.npru.ac.th/img/head%20NPRU2-01.png"
        alt="Login"
      />
      <div className="my-[5rem] mx-[5rem]">
        <div className="flex space-x-4 mb-4">
          {["", "จิตวิทยา", "วรรณกรรม", "คอมพิวเตอร์", "การ์ตูน", "ธุรกิจ"].map((type) => (
            <button
              key={type}
              onClick={() => handleFilterChange(type)}
              className={`px-4 py-2 border border-gray-300 rounded ${
                filterType === type ? "bg-blue-500 text-white" : ""
              }`}
            >
              {type ? type : "ทั้งหมด"}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {limitedBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {startIndex > 0 && (
            <button onClick={handleBack} className="px-4 py-2 border border-gray-300 rounded">
              Back
            </button>
          )}
          {startIndex + cardsPerPage < filteredBooks.length && (
            <button onClick={handleNext} className="px-4 py-2 border border-gray-300 rounded">
              Next
            </button>
          )}
        </div>
        <div className="text-center mt-2">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Books;
