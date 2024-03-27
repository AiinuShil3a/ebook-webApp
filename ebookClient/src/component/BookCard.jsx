import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        className="w-full h-48 object-cover mb-4"
        src={book.image}
        alt={book.name_book}
      />
      <h3 className="text-xl font-bold mb-2">{book.name_book}</h3>
      <p className="text-gray-600 mb-2">Author: {book.author}</p>
      <p className="text-gray-600">Type: {book.type_book}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ดาวน์โหลด
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          ดูรายละเอียด
        </button>
      </div>
    </div>
  );
};

export default BookCard;
