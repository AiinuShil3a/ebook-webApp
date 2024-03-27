import React from "react";

const SingIn = ({setHaveAccount}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">สมัครสมาชิก</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            ชื่อผู้ใช้
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            รหัสผ่าน
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            ยืนยันรหัสผ่าน
          </label>
          <input
            type="c-password"
            id="c-password"
            name="c-password"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-Blue text-White font-semibold py-2 px-4 rounded-md hover:bg-White hover:text-Blue transition duration-300 w-full mt-7"
        >
          สมัครสมาชิก
        </button>
        <button
          type="submit"
          className="bg-White text-Blue font-semibold py-2 px-4 rounded-md hover:bg-Blue hover:text-White transition duration-300 w-full mt-3.5"
          onClick={() => {setHaveAccount(true)}}
        >
          ฉันมีบัญชีแล้ว
        </button>
      </form>
    </div>
  );
};

export default SingIn;
