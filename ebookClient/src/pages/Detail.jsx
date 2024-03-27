import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/book/${id}`)
            .then((response) => {
                setBook(response.data);
            })
            .catch((error) => {
                console.error("Error fetching book:", error);
            });
    }, [id]);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center mx-[30rem] my-[7.5rem] h-[30rem]">
            <div className="lg:w-1/2 lg:order-2">
                <h1 className="text-3xl font-bold my-4">{book.name_book}</h1>
                <p className="text-lg font-semibold mb-2">Author: {book.author}</p>
                <p className="text-lg font-semibold mb-2">Type: {book.type_book}</p>
                <p className="text-blue-500 mb-2">Publisher: {book.publisher}
                    <button onClick={() => window.open(book.publisher_url, '_blank')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        ดาวน์โหลด
                    </button>
                </p>
                <p className="text-gray-600 my-4">Posted by: {book.userPost}</p>
            </div>
            <div className="lg:w-1/2 lg:order-1">
                <img src={book.image} alt={book.name_book} className="w-64 h-auto mb-4 rounded-lg shadow-md" />
            </div>
        </div>
    );
};

export default Detail;
