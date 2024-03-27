import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    type_book: "",
    name_book: "",
    author: "",
    image: "",
    publisher_url: "",
    publisher: "",
    userPost: "6603c527698fea78e3df65b4",
  });
  const [books, setBooks] = useState([]);

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

  useEffect(() => {
    const bookToUpdate = books.find((book) => book._id === id);
    if (bookToUpdate) {
      setFormData({
        type_book: bookToUpdate.type_book,
        name_book: bookToUpdate.name_book,
        author: bookToUpdate.author,
        image: bookToUpdate.image,
        publisher_url: bookToUpdate.publisher_url,
        publisher: bookToUpdate.publisher,
        userPost: bookToUpdate.userPost,
      });
    }
  }, [books, id]);

  const { type_book, name_book, author, image, publisher_url, publisher } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`http://localhost:3000/book/update/${id}`, formData);
      console.log(res.data);
      setFormData({
        type_book: "",
        name_book: "",
        author: "",
        image: "",
        publisher_url: "",
        publisher: "",
        userPost: "",
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-Blue text-center mb-8">
        แก้ไขหนังสือ
      </h1>
      <form
        onSubmit={onSubmit}
        className="max-w-lg mx-auto mt-6 shadow-md overflow-hidden bg-White rounded-lg p-6"
      >
        <div className="mb-6">
          <label
            htmlFor="type_book"
            className="block mb-2 text-sm font-medium text-Dark dark:text-White"
          >
            หมวดหมู่หนังสือ
          </label>
          <select
            id="type_book"
            name="type_book"
            value={type_book}
            onChange={onChange}
            placeholder="ระบุหมวดหมู่"
            className="block w-full p-4 text-Dark border border-Gray rounded-lg bg-Gray text-base focus:ring-Blue focus:border-Blue dark:bg-Dark dark:border-Gray dark:placeholder-Gray dark:text-Dark dark:focus:ring-Blue dark:focus:border-Blue"
          >
            <option value="">กรุณาเลือกหมวดหมู่</option>
            <option value="จิตวิทยา">จิตวิทยา</option>
            <option value="วรรณกรรม">วรรณกรรม</option>
            <option value="คอมพิวเตอร์">คอมพิวเตอร์</option>
            <option value="การ์ตูน">การ์ตูน</option>
            <option value="ธุรกิจ">ธุรกิจ</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="name_book"
            className="block mb-2 text-sm font-medium text-Dark dark:text-White"
          >
            ชื่อหนังสือ
          </label>
          <input
            type="text"
            id="name_book"
            name="name_book"
            value={name_book}
            onChange={onChange}
            placeholder="ระบุชื่อหนังสือ"
            className="block w-full p-4 text-Dark border border-Gray rounded-lg bg-Gray text-base focus:ring-Blue focus:border-Blue dark:bg-Dark dark:border-Gray dark:placeholder-Gray dark:text-Dark dark:focus:ring-Blue dark:focus:border-Blue"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-Dark dark:text-White"
          >
            ผู้แต่งหนังสือ
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={onChange}
            placeholder="ระบุชื่อผู้แต่ง"
            className="block w-full p-4 text-Dark border border-Gray rounded-lg bg-Gray text-base focus:ring-Blue focus:border-Blue dark:bg-Dark dark:border-Gray dark:placeholder-Gray dark:text-Dark dark:focus:ring-Blue dark:focus:border-Blue"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="publisher_url"
            className="block mb-2 text-sm font-medium text-Dark dark:text-White"
          >
            เว็ปไซด์สำหรับดาวน์โหลด (Google drive)
          </label>
          <input
            type="text"
            id="publisher_url"
            name="publisher_url"
            value={publisher_url}
            onChange={onChange}
            placeholder="โปรดระบุ url download"
            className="block w-full p-4 text-Dark border border-Gray rounded-lg bg-Gray text-base focus:ring-Blue focus:border-Blue dark:bg-Dark dark:border-Gray dark:placeholder-Gray dark:text-Dark dark:focus:ring-Blue dark:focus:border-Blue"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="publisher"
            className="block mb-2 text-sm font-medium text-Dark dark:text-White"
          >
            สำนักพิมพ์
          </label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            value={publisher}
            onChange={onChange}
            placeholder="ระบุสำนักพิมพ์"
            className="block w-full p-4 text-Dark border border-Gray rounded-lg bg-Gray text-base focus:ring-Blue focus:border-Blue dark:bg-Dark dark:border-Gray dark:placeholder-Gray dark:text-Dark dark:focus:ring-Blue dark:focus:border-Blue"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-Dark dark:text-White"
          >
            รูปหนังสือ
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={onChange}
            placeholder="โปรดระบุ url image"
            className="block w-full p-4 text-Dark border border-Gray rounded-lg bg-Gray text-base focus:ring-Blue focus:border-Blue dark:bg-Dark dark:border-Gray dark:placeholder-Gray dark:text-Dark dark:focus:ring-Blue dark:focus:border-Blue"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-White bg-Blue hover:bg-Blue rounded-lg font-semibold transition duration-300"
        >
          อัพเดท
        </button>
      </form>
    </div>
  );
};

export default Update;
