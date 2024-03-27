import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-Blue p-4">
      <div className="flex items-center">
        <div className="mr-4">
          <a href="/" className="text-White font-bold hover:text-gray-300">NPRU E-Books</a>
        </div>
        <div className="mr-4">
          <a href="/books" className="text-White hover:text-gray-300">หนังสือ</a>
        </div>
        <div>
          <a href="/portfolio" className="text-White hover:text-gray-300">ผลงานต่อสัญญาจ้าง</a>
        </div>
      </div>
      <div>
        <a href="/GetStarted" className="text-White hover:text-gray-300">เข้าสู่ระบบ</a>
      </div>
    </nav>
  );
};

export default Navbar;
