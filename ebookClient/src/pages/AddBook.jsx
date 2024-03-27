import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [formData, setFormData] = useState({
    type_book: "",
    name_book: "",
    author: "",
    image: "",
    publisher_url: "",
    publisher: "",
  });

  const { type_book, name_book, author, image, publisher_url, publisher } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/book", formData);
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
        เพิ่มหนังสือใหม่
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
          <input
            type="text"
            id="type_book"
            name="type_book"
            value={type_book}
            onChange={onChange}
            placeholder="ระบุหมวดหมู่"
            className="block w-full p-4 text-Dark border border-Gray rounded-lg bg-Gray text-base focus:ring-Blue focus:border-Blue dark:bg-Dark dark:border-Gray dark:placeholder-Gray dark:text-Dark dark:focus:ring-Blue dark:focus:border-Blue"
          />
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
            เว็ปไซด์ผู้แต่งหนังสือ
          </label>
          <input
            type="text"
            id="publisher_url"
            name="publisher_url"
            value={publisher_url}
            onChange={onChange}
            placeholder="ระบุเว็ปไซด์ผู้แต่ง"
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
            className="block text-sm font-medium text-Dark"
          >
            รูปภาพหนังสือ
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="block w-full p-3 border border-Gray rounded-lg focus:outline-none focus:border-Blue"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-White bg-Blue hover:bg-Blue rounded-lg font-semibold transition duration-300"
        >
          เพิ่มหนังสือ
        </button>
      </form>
    </div>
  );
};

export default AddBook;
