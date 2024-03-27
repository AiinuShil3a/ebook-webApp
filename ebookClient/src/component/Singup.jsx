import React, { useContext, useState } from "react";
import { AuthContext } from "../context/UserContext";


const SignUp = ({setHaveAccount}) => {
const {register} = useContext(AuthContext);
const [username , setUsername] = useState('');
const [password , setPassword] = useState('');
const [confirmPassword , setConfirmPassword] = useState('')
const handleSubmit = async (e) => {
  e.preventDefault();
  await register(username,password)
}
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">สมัครสมาชิก</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            ชื่อผู้ใช้
          </label>
          <input
            type="text"
            value={username}
            id="username"
            name="username"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            type="password"
            id="c-password"
            name="c-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

export default SignUp;
