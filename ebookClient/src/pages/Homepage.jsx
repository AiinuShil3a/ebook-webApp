import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import axios from "axios";
import BookCard from "../component/BookCard";

const Homepage = () => {
  const [books, setBooks] = useState([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/book")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, [books]);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };
  const handleToAllbooks = (type) => {
    window.location.href = "/books";
  };

  const filteredBooks = filterType
    ? books.filter((book) => book.type_book === filterType)
    : books;
  const limitedBooks = filteredBooks.slice(0, 5);
  return (
    <div>
      <img
        className="w-full h-[30rem]"
        src="https://webmail.npru.ac.th/img/head%20NPRU2-01.png"
        alt="Login"
      />
      <div className="my-[5rem] mx-[5rem]">
        <div className="my-6 text-[2rem]">
          <h1>Recommend</h1>
        </div>

        <div className="flex space-x-4 mb-4">
          {["", "จิตวิทยา", "วรรณกรรม", "คอมพิวเตอร์", "การ์ตูน", "ธุรกิจ"].map(
            (type) => (
              <button
                key={type}
                onClick={() => handleFilterChange(type)}
                className={`px-4 py-2 border border-gray-300 rounded ${
                  filterType === type ? "bg-blue-500 text-white" : ""
                }`}
              >
                {type ? type : "ทั้งหมด"}
              </button>
            )
          )}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {limitedBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
          {limitedBooks.length < filteredBooks.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleToAllbooks}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                <h1 className="text-[5rem]"> > </h1>
                ดูรายการหนังสือทั้งหมด
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
