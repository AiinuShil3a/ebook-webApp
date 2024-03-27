import React, { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";

const SingIn = ({setHaveAccount}) => {
  const {login} = useContext(AuthContext)
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username , password)
  }
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">เข้าสู่ระบบ</h2>
      <form onSubmit={handleLogin}>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-Blue text-White font-semibold py-2 px-4 rounded-md hover:bg-White hover:text-Blue transition duration-300 w-full mt-7"
        >
          เข้าสู่ระบบ
        </button>
        <button
          type="submit"
          className="bg-White text-Blue font-semibold py-2 px-4 rounded-md hover:bg-Blue hover:text-White transition duration-300 w-full mt-3.5"
          onClick={() => {setHaveAccount(false)}}
        >
          สมัครสมาชิก
        </button>
      </form>
    </div>
  );
};

export default SingIn;
